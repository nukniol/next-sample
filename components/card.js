import Image from "next/image";
import Link from "next/link";

export default function Card({ post }) {
  function getPostUrl(slug) {
    return `/posts/${slug}`;
  }

  return (
    <div className="col-6 col-md-4 col-lg-3 px-1">
      <Link href={getPostUrl(post.slug)}>
        <div className="ratio ratio-4x3">
          <Image
            className="img-thumbnail img-cover p-0 border-0"
            src={post.post_thumbnail.URL}
            width={100}
            height={100}
            alt={post.title}
          />
        </div>
        <p className="text-truncate px-3">{post.title}</p>
      </Link>
    </div>
  );
}
