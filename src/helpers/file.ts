import { save } from '@tauri-apps/api/dialog'
import { writeBinaryFile, removeFile } from '@tauri-apps/api/fs'
import { downloadDir } from '@tauri-apps/api/path'

export const downloadFile = async (file: Blob) => {
  const buffer = await file.arrayBuffer()

  try {
    await writeBinaryFile(
      'C:\\FC 24 Live Editor\\mods\\root\\Legacy\\data\\ui\\game\\overlays\\Generic\\overlay_9002.BIG',
      buffer
    )
    return {
      success: true,
      msg: 'Successfully aplied'
    }
  } catch (error) {
    return {
      success: false,
      msg: 'Failed to apply'
    }
  }
}

export const deleteFile = async () => {
  await removeFile(
    'C:\\FC 24 Live Editor\\mods\\root\\Legacy\\data\\ui\\game\\overlays\\Generic\\overlay_9002.BIG'
  )
}
