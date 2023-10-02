"use client";

import React, { FormEvent, useRef, useState } from "react";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

export default function LemonButton({ text }: { text: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const url =
    "https://aprendiendodefi.us21.list-manage.com/subscribe/post?u=3ef26e10472c36d247a54389e&amp;id=a6db9a6c12&amp;f_id=00745de1f0";

  const { loading, error, success, message, handleSubmit } =
    useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleSubmit(fields);
  };

  return (
    <div className="mt-10 sm:mt-12">
      {/* This is a working waitlist form. Create your access key from https://web3forms.com/s to setup.  */}
      {success || error ? (
        <section className="relative w-full">
          <div className="shadow-outline-gray animate-fade-bottom  flex items-start space-x-2 rounded-[9px] bg-purple-200 px-6 py-4 ">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-purple-600 bg-purple-500">
              🥳
            </div>
            <div className="text-xs sm:text-sm">
              {success ? (
                <p>
                  ¡Felicidades! Ya te hemos agregado a nuestra lista de espera.
                  Te avisaremos cuando esté listo para probarlo. Siguenos{" "}
                  <a
                    href="https://x.com/web3lingo_"
                    className="text-purple-600 hover:text-purple-500"
                  >
                    @web3lingo_
                  </a>{" "}
                  para estar al día.
                </p>
              ) : (
                <p>
                  No hemos podido añadirle a la lista de espera Vuelva a
                  intentarlo o escríbanos a isaac@web3lingo.com. Gracias por su
                  comprensión
                </p>
              )}
            </div>
          </div>
        </section>
      ) : (
        <form
          onSubmit={onSubmit}
          className="sm:mx-auto sm:max-w-xl lg:mx-0"
          //action="https://aprendiendodefi.us21.list-manage.com/subscribe/post?u=3ef26e10472c36d247a54389e&amp;id=a6db9a6c12&amp;f_id=00745de1f0"
        >
          <div className="sm:flex">
            {/* <input
            type="hidden"
            name="access_key"
            defaultValue="YOUR_ACCESS_KEy_HERE"
          />
          <input
            type="hidden"
            name="subject"
            defaultValue="New Waitlist"
          /> */}
            <div className="min-w-0 flex-1">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                onChange={handleFieldChange}
                value={fields.EMAIL}
                id="EMAIL"
                autoFocus
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                type="email"
                placeholder="Introduce tu correo electrónico"
                className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                defaultValue=""
                autoComplete="off"
              />
            </div>
            <div className="mt-3 sm:ml-3 sm:mt-0">
              <button
                ref={buttonRef}
                type="submit"
                className="grow rounded-2xl border-b-4 border-purple-600 bg-purple-500 p-3 font-bold text-white duration-300 ease-out hover:bg-purple-600 sm:min-w-[150px] sm:max-w-fit sm:grow-0"
              >
                Unirme
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="relative py-3"></div>
    </div>
  );
}
