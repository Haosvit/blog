import { formatTime } from '@/utils/time';
import Link from 'next/link';

export default function PostLink({ title, publishedAt, summary, slug }) {
    return (
        <Link href={`/blog/${slug}`}>
            <a>
                <h4>{title}</h4>
                <span>{formatTime(publishedAt)}</span>
                {summary && <p>{summary}</p>}
            </a>
        </Link>
    );
}
