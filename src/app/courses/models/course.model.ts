export default interface CourseInterface {
    id?: number;
    title: string;
    description?: string;
    rating?: number;
    dateCreated: Date;
    completion: number;
    visitedCount?: number;
    reviewIds?: number[];
    commentIds?: number[];
}