# syntax-and-semantic-videos
For the syntax and semantics course at the university, we've to watch 100+ youtube videos. The sound on many of these are quite low. Surely a CS boi can gather these links, and play them at 800% volume in VLC.

# Prerequisites
For VLC to work, you must first add the directory that VLC is installed in to your environment variables.

# Usage
```npm install``` followed by ```npm run electron-build-and-run```.

![Electron app](http://github-images.fobr.dk/syntax-and-semantics.png?2 "The electron app")

# Building an exe file
If you'd rather build an executable file than running the npm command every time, you can do using electron-packager
```electron-packager "<path>" ss-browser --platform=win32 --arch=x64 --overwrite```
Like
```electron-packager "D:\GitHub\syntax-and-semantic-videos\syntax-and-semantics-browser" ss-browser --platform=win32 --arch=x64 --overwrite```

# Disclaimer
The videos are all made by [Hans Hüttel](https://www.youtube.com/channel/UCCiXT1k2RN37TrjekAqb09Q) and are shared under the "CC BY-NC 4.0" license. This program will just show the videos in a nicer way, and easily allow you to open the videos in VLC, where you have the possibility to play them at a higher volume. In the program a link will be shown to the videos and credit will once again be given.
