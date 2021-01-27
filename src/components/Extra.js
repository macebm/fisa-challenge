import QuizCard from "./QuizCard";

export default function Extra() {
  return (
    <section className="extra">
      <QuizCard question="Foo?" answer="Bar!" />
      <QuizCard
        question="Klick on this button"
        answer="Danke nochmal für die Herausforderung. Es hat wircklich Spaß gemacht und ich hoffe bald mehr bei euch lernen zu dürfen. LG Marcel"
      />
    </section>
  );
}
