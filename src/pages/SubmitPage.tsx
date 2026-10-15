import { useEffect } from "react";
import { Faq } from "../components/Faq";
import { SubmitForm } from "../components/SubmitForm";

export function SubmitPage() {
  useEffect(() => {
    document.title = "Submit — Sastery";
  }, []);

  return (
    <>
      <SubmitForm />
      <Faq />
    </>
  );
}
