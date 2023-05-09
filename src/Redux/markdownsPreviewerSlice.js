import { createSlice } from "@reduxjs/toolkit";
import { help } from "../Help/help";

const markdownsPreviewerSlice = createSlice({
    name: "markdowns",
    initialState: {
        currentMarkdown: "this is user input",
        userMarkdown: "this is user input",
        showMarkdown: false,
        markdownHelp: help

    },

    reducers: {
        setMarkdown: (state, action) => {
            state.currentMarkdown = action.payload
            state.userMarkdown = action.payload
        },

        showMarkdown: (state, action) => {
            if (state.showMarkdown) {
                state.currentMarkdown = state.userMarkdown
                state.showMarkdown = false
            } else {
                state.currentMarkdown = state.markdownHelp
                state.showMarkdown = true
            }
        }
    }
})

export const { setMarkdown, showMarkdown } = markdownsPreviewerSlice.actions
export default markdownsPreviewerSlice.reducer