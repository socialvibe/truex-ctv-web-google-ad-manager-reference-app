/**
 * Describes a single timespan within a full video that contains consecutive stitched-in ad videos.
 * The first video in each ad break is assumed to be the placeholder video for the true[X] interactive ad, and
 * as such is not actually played but skipped over.
 */
export class AdBreak {
    constructor(cuePoint, index) {
        this.index = index;
        this.startTime = cuePoint.start;
        this.endTime = cuePoint.end;
        this.started = false;
        this.completed = false;

        // The length of the truex placeholder video.
        this.placeHolderDuration = 0;
    }

    get duration() {
        return this.endTime - this.startTime;
    }

    get fallbackStartTime() {
        return this.startTime + this.placeHolderDuration;
    }

    get fallbackDuration() {
        return this.duration - this.placeHolderDuration;
    }
}
