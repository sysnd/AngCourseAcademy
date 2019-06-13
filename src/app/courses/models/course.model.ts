import AttendeeInterface from './attendee.model';

export default interface CourseInterface {
    id: number;
    title: string;
    description: string;
    rating: number;
    attendees: AttendeeInterface[];
}