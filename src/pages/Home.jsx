import React from "react";
import NoteList from "../component/NoteList";

const Home = () => {
  const data = [
    {
      title: "Pembelajaran hari ini",
      description:
        "Hari ini saya mengerjakan tugas react untuk menampilkan catatan  ",
      createdAt: new Date(),
    },
    {
      title: "Pengeluaran uang hari ini",
      description: "Mengisi bahan bakar 20k, makan 30k, jajan 20k",
      createdAt: new Date(),
    },
    {
      title: "Materi react",
      description: "Materi react dapat diakse di react.dev",
      createdAt: new Date(),
    },
    {
      title: "Materi react",
      description: "Materi react dapat diakse di react.dev",
      createdAt: new Date(),
    },
    {
      title: "Materi react",
      description: "Materi react dapat diakse di react.dev",
      createdAt: new Date(),
    },
    {
      title: "Lagu favorit",
      description:
        "Hindia - Secukupnya, Hindia - Rumah Ke Rumah, Fiersa - April, Fiersa - Celengan Rindu",
      createdAt: new Date(),
    },
  ];
  return (
    <div className="py-10 sm:py-10">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="mx-auto  lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
            Note Application
          </h2>
        </div>
        <div className="mx-auto pt-10 mb-3 xl:w-96">
          <input
            type="search"
            className=" m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(191,89,15)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            id="searchNote"
            placeholder="Search Note"
          />
        </div>
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-5 gap-y-5 pt-5 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <NoteList data={data} />
        </div>
      </div>
    </div>
  );
};

export default Home;
