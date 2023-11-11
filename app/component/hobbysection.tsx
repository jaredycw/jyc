import { getCourses } from '@/sanity/sanity-utils';
import { getBooks } from '@/sanity/sanity-utils';
import Link from 'next/link';
import Image from 'next/image';

export default async function HobbySection() {
    const courses = await getCourses();
    const books = await getBooks();

  return (
    <div className="grid grid-cols-1 gap-0 xl:grid-cols-2 hobby-border">

              <div>
                <div className="hobby-title">Currently Reading</div>
                
                      
                          {books.map((book) => (
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-10 mb-20" key={book._id} >

                                <div className="book m-auto">
                                  <Link href={book.link} key={book._id} target="_blank" >
                                    <div className="book-name">
                                      {book.title}
                                    </div>
                                    <div className="book-author">{book.bookAuthor}</div>
                                  </Link>
                                </div>
                                <div className="book-cover">
                                <Link href={book.link} key={book._id} target="_blank">
                                    {book.cover && (<Image src={book.cover} alt={book.title} width={200} height={270} loading="lazy" className="post-wrapper-img" blurDataURL={book.lqip} placeholder='blur'/>)}
                                </Link>
                                </div>
                    
                            </div>
                               ))}
                            

              </div>

              <div className="ml-0 py-0 xl:ml-10">
                <div className="hobby-title">Currently Studying</div>
                <div className="study-list-wrapper mx-0 xl:mx-10">
                         <ul className="study-list my-14 pb-7 md:my-20 md:pb-10">
                         {courses.map((course : any) =>(
                          <Link href={course.link} key={course._id} target="_blank">
                            <li key={course._id}>{course.title}</li>
                          </Link>
                         ))}
                         </ul>
                    </div>
              </div>

    </div>
  );
}