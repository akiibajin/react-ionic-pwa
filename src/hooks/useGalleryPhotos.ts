import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';
import { UserPhoto } from '../interfaces/photo';
import { base64FromPath } from '../helpers/base64';
import { PHOTO_STORAGE } from '../helpers/constants';

export function usePhotoGallery() {
    const [photos, setPhotos] = useState<UserPhoto[]>([]);
    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
        const fileName = Date.now() + '.jpeg';
        const savedFileImage = await savePicture(photo, fileName);
        const newPhotos = [
            savedFileImage,
            ...photos,
        ];
        setPhotos(newPhotos);
        Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
    };
    const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
        let base64Data: string;
        if (isPlatform("hybrid")) {
            const file = await Filesystem.readFile({
                path: photo.path!,
            });
            base64Data = file.data;
        }
        else {
            base64Data = await base64FromPath(photo.webPath!);
        }
        const savedFile = await Filesystem.writeFile({
            path: fileName,
            data: base64Data,
            directory: Directory.Data,
        });

        // Use webPath to display the new image instead of base64 since it's
        // already loaded into memory
        if (isPlatform("hybrid")) {
            return {
                filepath: savedFile.uri,
                webviewPath: Capacitor.convertFileSrc(savedFile.uri),
            }
        } else {
            return {
                filepath: fileName,
                webviewPath: photo.webPath,
            };
        }
    };
    useEffect(() => {
        const loadSaved = async () => {
            const { value } = await Preferences.get({ key: PHOTO_STORAGE });
            const photosInPreferences = (value ? JSON.parse(value) : []) as UserPhoto[];
            if (!isPlatform("hybrid")) {
                for (let photo of photosInPreferences) {
                    const file = await Filesystem.readFile({
                        path: photo.filepath,
                        directory: Directory.Data,
                    });
                    // Web platform only: Load the photo as base64 data
                    photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
                }
            }
            setPhotos(photosInPreferences);
        };
        loadSaved();
    }, []);

    return {
        photos,
        takePhoto,
        setPhotos,
        savePicture
    };
}