import { Link } from "react-router";
import { format } from "date-fns";

export default function PostListItem({ ...props }: Post) {
  return (
    <>
      <Link to={`/read/${props.id}`}>
        <article>
          <img
            src={props.thumbnail}
            alt="dummy"
            className="object-cover w-full aspect-[16/9]"
          />
          <div>
            <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-[12px] sm:text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
              {props.category}
            </strong>
            <h3 className="text-lg sm:text-[20px] md:text-[24px] font-bold mb-[12px]">
              {props.title}
            </h3>
            <p className="text-[#515151]">
              {format(props.createdAt, "yyyy-MM-dd")}
            </p>
            <p className="mt-[15px] text-[#434343]">{props.desc}</p>
            <div className="mt-4 flex items-center gap-[14px]">
              <img
                src={props.thumbnailAvatar}
                alt=""
                className="rounded-s-full max-w-10"
              />
              <strong className="text-sm">{props.writer}</strong>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
