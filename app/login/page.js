import Link from "next/link";

const page = () => {
  const email = "test";
  return (
    <div className="">
      <div className="bg-indigo-600 flex flex-row mx-auto justify-between">
        <h2>{email}</h2>
        <div>
          <Link href={"/"}>Logout</Link>
        </div>
      </div>

      <h1>Selamat Siang</h1>
    </div>
  );
};

export default page;
