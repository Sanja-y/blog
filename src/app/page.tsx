import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { api } from "@/trpc/server";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between text-indigo-900 px-[5%] py-[1%] ">
      <h3 className="text-2xl font-bold ">Sanjay.</h3>
      <div className="flex text-mdx space-x-12 font-semibold">
        <button>Home</button>
        <button>Pages</button>
        <button>Portfolio</button>
        <button>About</button>
      </div>
    </div>
  )
}
const AddPost = () => {
  return (
    <div className="w-full flex justify-between text-indigo-900 bg-white px-[5%] py-[1%] ">
      <h3 className="text-2xl font-bold ">Blog</h3>
      <>
        <button>Add post</button>
      </>
    </div>
  )
}
const Hero = () => {
  const Post = () => {
    return (
      <div className="h-[23.5rem] w-[25%] bg-slate-50 rounded-md  px-[2%] py-4">
        Post
      </div>
    )
  }
  return (
    <div className="flex justify-center space-x-6 px-[5%] py-4 w-full">
      <div className="w-[20%] flex flex-col space-y-8">
        <input placeholder="Search" type="text"
          className="outline-none px-3 rounded-xl" />
        <div className="w-full h-[20rem] bg-slate-100 rounded-lg px-4 py-2">
          <h4 className="text-xl font-bold text-indigo-900">Top Posts</h4>
        </div>
      </div>
      <div className="w-[80%] flex flex-col space-y-6">
        <Post />
        <div className="">
          <button className="text-indigo-900 bg-slate-100 text-[0.8rem] w-[1.5rem] h-[1.5rem] rounded-sm">1</button>
        </div>
      </div>
    </div>
  )
}
export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });



  return (
    // <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
    //   <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
    //     <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
    //       Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
    //     </h1>
    //     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
    //       <Link
    //         className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
    //         href="https://create.t3.gg/en/usage/first-steps"
    //         target="_blank"
    //       >
    //         <h3 className="text-2xl font-bold">First Steps →</h3>
    //         <div className="text-lg">
    //           Just the basics - Everything you need to know to set up your
    //           database and authentication.
    //         </div>
    //       </Link>
    //       <Link
    //         className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
    //         href="https://create.t3.gg/en/introduction"
    //         target="_blank"
    //       >
    //         <h3 className="text-2xl font-bold">Documentation →</h3>
    //         <div className="text-lg">
    //           Learn more about Create T3 App, the libraries it uses, and how to
    //           deploy it.
    //         </div>
    //       </Link>
    //     </div>
    //     <div className="flex flex-col items-center gap-2">
    //       <p className="text-2xl text-white">
    //         {hello ? hello.greeting : "Loading tRPC query..."}
    //       </p>
    //     </div>

    //     {/* <CrudShowcase /> */}
    //   </div>
    // </main>
    <main className="min-h-screen bg-slate-200 font-poppins flex flex-col ">
      <Navbar />
      <AddPost />
      <Hero />
    </main>
  );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
