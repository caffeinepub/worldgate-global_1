import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitBooking } from "../hooks/useQueries";

const serviceOptions = [
  "Tourist & Visitor Visa",
  "Canada PR Immigration",
  "Australia PR Immigration",
  "UK Work Visa",
  "Europe Work Permit",
  "Germany Chancenkarte Card",
  "Gulf Job Visa",
  "Hajj & Umrah Package",
  "Schengen Visa",
  "General Consultation",
];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  });
  const { mutateAsync, isPending } = useSubmitBooking();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.serviceInterest) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await mutateAsync(form);
      toast.success(
        "Consultation booked! We will contact you within 24 hours.",
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: "",
      });
    } catch {
      toast.error("Failed to submit booking. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-navy border border-white/10 rounded-2xl p-8 card-glow space-y-5"
      data-ocid="booking.modal"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label className="text-white/80 font-body text-sm">Full Name *</Label>
          <Input
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            placeholder="Your full name"
            className="bg-navy-light border-white/15 text-white placeholder:text-white/30 focus:border-gold/50 font-body"
            data-ocid="booking.input"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-white/80 font-body text-sm">
            Email Address *
          </Label>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            placeholder="your@email.com"
            className="bg-navy-light border-white/15 text-white placeholder:text-white/30 focus:border-gold/50 font-body"
            data-ocid="booking.input"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label className="text-white/80 font-body text-sm">
            Phone Number *
          </Label>
          <Input
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            placeholder="+91-XXXXXXXXXX"
            className="bg-navy-light border-white/15 text-white placeholder:text-white/30 focus:border-gold/50 font-body"
            data-ocid="booking.input"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-white/80 font-body text-sm">
            Service Interest *
          </Label>
          <Select
            value={form.serviceInterest}
            onValueChange={(v) =>
              setForm((p) => ({ ...p, serviceInterest: v }))
            }
          >
            <SelectTrigger
              className="bg-navy-light border-white/15 text-white focus:border-gold/50 font-body"
              data-ocid="booking.select"
            >
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent className="bg-navy-mid border-white/15">
              {serviceOptions.map((opt) => (
                <SelectItem
                  key={opt}
                  value={opt}
                  className="text-white hover:bg-white/10 font-body"
                >
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-1.5">
        <Label className="text-white/80 font-body text-sm">
          Message (Optional)
        </Label>
        <Textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          placeholder="Tell us about your immigration goals..."
          rows={4}
          className="bg-navy-light border-white/15 text-white placeholder:text-white/30 focus:border-gold/50 font-body resize-none"
          data-ocid="booking.textarea"
        />
      </div>
      <Button
        type="submit"
        disabled={isPending}
        size="lg"
        className="w-full bg-gold text-navy font-bold hover:bg-gold-light transition-all font-body"
        data-ocid="booking.submit_button"
      >
        {isPending ? (
          <>
            <Loader2 size={16} className="mr-2 animate-spin" /> Submitting...
          </>
        ) : (
          <>
            <CheckCircle size={16} className="mr-2" /> Book Free Consultation
          </>
        )}
      </Button>
    </form>
  );
}
