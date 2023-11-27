-- CreateTable
CREATE TABLE "Playlist" (
    "playlistId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("playlistId")
);

-- CreateTable
CREATE TABLE "song" (
    "songId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "album" TEXT NOT NULL,
    "genera" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "song_pkey" PRIMARY KEY ("songId")
);

-- AddForeignKey
ALTER TABLE "song" ADD CONSTRAINT "song_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("playlistId") ON DELETE RESTRICT ON UPDATE CASCADE;
