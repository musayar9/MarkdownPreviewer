import { configureStore } from '@reduxjs/toolkit'

import markdownsPreviewerSlice from './markdownsPreviewerSlice'

export const store = configureStore({
    reducer: {
        markdowns: markdownsPreviewerSlice
    }

})