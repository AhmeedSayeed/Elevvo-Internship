import Review from "./Review.jsx";
import { REVIEWS } from "../data/reviews.js";


export default function Reviews() {
    return <section id="reviews" className="flex flex-col items-center justify-center mb-16">
            <h2 className="text-2xl font-bold text-purple-400 my-4 text-center mb-8">Reviews</h2>
            <div className="grid grid-cols-3 gap-6 px-8">
                {REVIEWS.map((review) => (
                    <Review key={review.id} {...review} />
                ))}
            </div>
        </section>
}