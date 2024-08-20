interface TestimonialsProps {
  children: string;
  name: string;
  image?: string;
  fallback?: string;
  socials?: string;
}

export default function Testimonials({
  children,
  name,
  image,
  fallback,
  socials,
}: TestimonialsProps) {
  return (
    <section id="testimonials" className="section w-full flex justify-center items-center py-52">
      <div className="flex flex-col gap-5 items-center justify-center w-3/5">
        <p className="text-3xl font-medium">"{children}"</p>
        <div className="text-3xl font-semibold self-end">
          <a href={socials} target="_blank" rel="noreferrer">
            <p>- {name}</p>
          </a>
        </div>
      </div>
    </section>
  );
}
