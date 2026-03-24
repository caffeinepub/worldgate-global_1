import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    id: bigint;
    title: string;
    content: string;
    date: bigint;
    author: string;
    summary: string;
    category: string;
}
export interface ContactInquiry {
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface ConsultationBooking {
    name: string;
    email: string;
    serviceInterest: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface Testimonial {
    id: bigint;
    clientName: string;
    reviewText: string;
    rating: bigint;
    location: string;
}
export interface backendInterface {
    addBlogPost(title: string, summary: string, content: string, category: string, author: string): Promise<bigint>;
    addTestimonial(clientName: string, location: string, rating: bigint, reviewText: string): Promise<bigint>;
    getAllBlogPosts(): Promise<Array<BlogPost>>;
    getAllConsultationBookings(): Promise<Array<ConsultationBooking>>;
    getAllContactInquiries(): Promise<Array<ContactInquiry>>;
    getAllTestimonialsHighestRating(): Promise<Array<Testimonial>>;
    getBlogPostById(id: bigint): Promise<BlogPost>;
    getBlogPostsByCategory(category: string): Promise<Array<BlogPost>>;
    submitBooking(name: string, email: string, phone: string, serviceInterest: string, message: string): Promise<bigint>;
    submitInquiry(name: string, email: string, phone: string, message: string): Promise<bigint>;
}
