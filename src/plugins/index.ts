import type { Plugin } from 'payload'
import { s3Storage } from '@payloadcms/storage-s3'
import { S3 } from '@/constants/init'
import { formPlugin } from '@/plugins/form'

export const plugins: Plugin[] = [
  s3Storage({
    collections: {
      media: {
        prefix: 'app',
        generateFileURL: ({ filename }) => {
          return `/api/media/file/${filename}`
        },
        signedDownloads: {
          shouldUseSignedURL: ({ filename }) => {
            return filename.endsWith('.mp4')
          },
        },
      },
    },
    bucket: S3.BUCKET,
    clientUploads: true,
    config: {
      forcePathStyle: true,
      requestChecksumCalculation: 'WHEN_REQUIRED',
      responseChecksumValidation: 'WHEN_REQUIRED',
      credentials: {
        accessKeyId: S3.ACCESS_KEY_ID,
        secretAccessKey: S3.SECRET_ACCESS_KEY,
      },
      region: S3.REGION,
      endpoint: S3.ENDPOINT,
    },
  }),
  formPlugin
]
