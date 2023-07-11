import tetrapack from "../public/tetrapack.svg";
import next from "../public/next.svg";
import tailwind from "../public/tailwind.svg";
import Image from "next/image";

export default function (props) {
	return (
		<header className="w-full p-8 pt-4 border-2 border-teal-300 bg-teal-50 mb-12 rounded-md prose">
			<div className="flex flex-wrap items-center gap-4">
				<Image
					src={tetrapack}
					width={48}
					height={48}
					alt="logo of tetra pack"
					className="rounded"
				/>
				<Image
					src={tailwind}
					width={48}
					height={48}
					alt="logo of tailwind"
					className="rounded"
				/>
				<Image
					src={next}
					width={164}
					height={48}
					alt="logo of nextjs"
					className="rounded"
				/>
			</div>
			<h1>Try Tetra Pack</h1>
			<p className="lead">
				Here, is an example how a notion page would be rendered by{" "}
				<b>tetra pack</b> using nextjs and tailwindcss typography.
			</p>
			<ul className="marker:text-teal-300">
				<li>
					<a href="#">Docs are listed here.</a>
				</li>
				<li>
					<a href="https://github.com/ashishk1331/tetrapack">
						Give project a star!
					</a>
				</li>
			</ul>
			<p className="mt-8 mx-auto w-fit">
				Crafted by{" "}
				<a href="https://twitter.com/AshishK1331">Ashish Khare</a>.
				Report any issue or suggestion on{" "}
				<a href="https://github.com/ashishk1331/tetrapack/issues/new">
					github
				</a>
				.
			</p>
		</header>
	);
}
