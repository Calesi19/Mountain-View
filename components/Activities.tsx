"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const BlogPostCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="py-16" ref={ref}>
      <div className="relative">
        <div className="container overflow-hidden p-8 bg-gray-50 rounded-xl">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-2xl font-semibold">Upcoming Events</h2>

            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ imgUrl, author, title, description }) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <img
        src={imgUrl}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An image for a fake blog post titled ${title}`}
      />

      <p className="mt-1.5 text-lg font-medium">{title}</p>

      <p className="text-sm text-neutral-500">{description}</p>
      <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
        {author}
      </span>
    </div>
  );
};

export default BlogPostCarousel;

const posts = [
  {
    id: 1,
    imgUrl: "/artsandcrafts.jpg",
    author: "March 19. 2024",
    title: "Arts and Crafts Night",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl: "/concert.jpg",
    author: "Kyle Parsons",
    title: "Free Andrea Bates Concert",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl: "/meeting.jpg",
    author: "Growing your Business Seminar",
    title: "Growing your Business Seminar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    imgUrl: "/networking.jpg",
    author: "Jess Drum",
    title: "Annual Chamber Networking and Dinner",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl: "/service.jpg",
    author: "Phil White",
    title: "Clean Up at Sky View Park",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl: "/laptop.jpg",
    author: "Karen Peabody",
    title: "Cyber Security Conference",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    imgUrl: "/conference.jpg",
    author: "Dante Gordon",
    title: "Market Research Conference",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
];
