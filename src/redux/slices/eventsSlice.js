import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const response = await axios.get(
    "https://afternoon-headland-78231.herokuapp.com/events"
  );
  return response.data;
});
const eventsSlice = createSlice({
  name: "eventsSlice",
  initialState: {
    events: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.events = action.payload;
    });
    builder.addCase(fetchEvents.pending, (state) => {
      state.events = [];
    });
  },
});

export default eventsSlice.reducer;
