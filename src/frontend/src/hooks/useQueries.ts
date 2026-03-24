import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { BlogPost, Testimonial } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllBlogPosts() {
  const { actor, isFetching } = useActor();
  return useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBlogPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetBlogPostsByCategory(category: string) {
  const { actor, isFetching } = useActor();
  return useQuery<BlogPost[]>({
    queryKey: ["blogPosts", category],
    queryFn: async () => {
      if (!actor) return [];
      if (category === "All") return actor.getAllBlogPosts();
      return actor.getBlogPostsByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonialsHighestRating();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      serviceInterest: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitBooking(
        data.name,
        data.email,
        data.phone,
        data.serviceInterest,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitInquiry(
        data.name,
        data.email,
        data.phone,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
