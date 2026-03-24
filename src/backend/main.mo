import Text "mo:core/Text";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  type BlogPost = {
    id : Nat;
    title : Text;
    summary : Text;
    content : Text;
    date : Int;
    category : Text;
    author : Text;
  };

  type Testimonial = {
    id : Nat;
    clientName : Text;
    location : Text;
    rating : Nat;
    reviewText : Text;
  };

  type ConsultationBooking = {
    name : Text;
    email : Text;
    phone : Text;
    serviceInterest : Text;
    message : Text;
    timestamp : Int;
  };

  type ContactInquiry = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Int;
  };

  module BlogPost {
    public func compare(b1 : BlogPost, b2 : BlogPost) : Order.Order {
      Int.compare(b1.date, b2.date);
    };
  };

  module Testimonial {
    public func compareByRating(t1 : Testimonial, t2 : Testimonial) : Order.Order {
      Int.compare(t2.rating, t1.rating);
    };
  };

  let consultationBookings = Map.empty<Nat, ConsultationBooking>();
  let contactInquiries = Map.empty<Nat, ContactInquiry>();
  let blogPosts = Map.empty<Nat, BlogPost>();
  let testimonials = Map.empty<Nat, Testimonial>();

  var nextConsultationBookingId = 1;
  var nextContactInquiryId = 1;
  var nextBlogPostId = 1;
  var nextTestimonialId = 1;

  // Submit Consultation Booking
  public shared ({ caller }) func submitBooking(name : Text, email : Text, phone : Text, serviceInterest : Text, message : Text) : async Nat {
    let booking : ConsultationBooking = {
      name;
      email;
      phone;
      serviceInterest;
      message;
      timestamp = Time.now();
    };
    let id = nextConsultationBookingId;
    consultationBookings.add(id, booking);
    nextConsultationBookingId += 1;
    id;
  };

  // Submit Contact Inquiry
  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phone : Text, message : Text) : async Nat {
    let inquiry : ContactInquiry = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };
    let id = nextContactInquiryId;
    contactInquiries.add(id, inquiry);
    nextContactInquiryId += 1;
    id;
  };

  // Add Blog Post (Admin only)
  public shared ({ caller }) func addBlogPost(title : Text, summary : Text, content : Text, category : Text, author : Text) : async Nat {
    let post : BlogPost = {
      id = nextBlogPostId;
      title;
      summary;
      content;
      date = Time.now();
      category;
      author;
    };
    blogPosts.add(nextBlogPostId, post);
    nextBlogPostId += 1;
    post.id;
  };

  // Add Testimonial
  public shared ({ caller }) func addTestimonial(clientName : Text, location : Text, rating : Nat, reviewText : Text) : async Nat {
    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5");
    };
    let testimonial : Testimonial = {
      id = nextTestimonialId;
      clientName;
      location;
      rating;
      reviewText;
    };
    testimonials.add(nextTestimonialId, testimonial);
    nextTestimonialId += 1;
    testimonial.id;
  };

  // Get All Blog Posts
  public query ({ caller }) func getAllBlogPosts() : async [BlogPost] {
    blogPosts.values().toArray().sort();
  };

  // Get All Testimonials Sorted by Highest/Lowest Rating
  public query ({ caller }) func getAllTestimonialsHighestRating() : async [Testimonial] {
    testimonials.values().toArray().sort(Testimonial.compareByRating);
  };

  // Get All Consultation Bookings (Admin)
  public query ({ caller }) func getAllConsultationBookings() : async [ConsultationBooking] {
    consultationBookings.values().toArray();
  };

  // Get All Contact Inquiries (Admin)
  public query ({ caller }) func getAllContactInquiries() : async [ContactInquiry] {
    contactInquiries.values().toArray();
  };

  // Get Blog Posts by Category
  public query ({ caller }) func getBlogPostsByCategory(category : Text) : async [BlogPost] {
    blogPosts.values().toArray().filter(func(post) { post.category == category });
  };

  // Get Blog Post By Id
  public query ({ caller }) func getBlogPostById(id : Nat) : async BlogPost {
    switch (blogPosts.get(id)) {
      case (null) { Runtime.trap("Blog post does not exist") };
      case (?post) { post };
    };
  };
};
