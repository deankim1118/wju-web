import { CallToAction } from '@/components/CallToAction';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1' id='maincontent'>
        <Hero />
        <CallToAction />

        {/* Dummy Content for Scroll Testing */}
        <section className='py-20 bg-gray-50'>
          <div className='container mx-auto px-6'>
            <h2 className='text-4xl font-bold mb-8 text-[#1e2d3d]'>
              About Washington Jabez University
            </h2>
            <p className='text-lg text-gray-700 mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className='text-lg text-gray-700 mb-6'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </section>

        <section className='py-20 bg-white'>
          <div className='container mx-auto px-6'>
            <h2 className='text-4xl font-bold mb-8 text-[#1e2d3d]'>
              Academic Programs
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-2xl font-semibold mb-4 text-[#8b1538]'>
                    Program {item}
                  </h3>
                  <p className='text-gray-700'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='py-20 bg-gray-50'>
          <div className='container mx-auto px-6'>
            <h2 className='text-4xl font-bold mb-8 text-[#1e2d3d]'>
              Campus Life
            </h2>
            <p className='text-lg text-gray-700 mb-6'>
              Our campus provides a vibrant community for students to grow
              academically, spiritually, and personally. With state-of-the-art
              facilities and a supportive environment, students thrive in their
              educational journey.
            </p>
            <div className='space-y-4'>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className='bg-white p-6 rounded-lg shadow-sm'>
                  <h3 className='text-xl font-semibold mb-2 text-[#8b1538]'>
                    Campus Feature {item}
                  </h3>
                  <p className='text-gray-700'>
                    Detailed description of campus feature {item}. This section
                    provides information about various aspects of campus life
                    and facilities available to students.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='py-20 bg-white'>
          <div className='container mx-auto px-6'>
            <h2 className='text-4xl font-bold mb-8 text-[#1e2d3d]'>
              Student Testimonials
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className='bg-gray-50 p-6 rounded-lg'>
                  <p className='text-gray-700 italic mb-4'>
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam.&quot;
                  </p>
                  <p className='font-semibold text-[#8b1538]'>
                    - Student {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='py-20 bg-gray-50'>
          <div className='container mx-auto px-6'>
            <h2 className='text-4xl font-bold mb-8 text-[#1e2d3d]'>
              News & Events
            </h2>
            <div className='space-y-6'>
              {[1, 2, 3, 4, 5].map((item) => (
                <article
                  key={item}
                  className='bg-white p-6 rounded-lg shadow-sm'
                >
                  <h3 className='text-2xl font-semibold mb-3 text-[#8b1538]'>
                    News Article {item}
                  </h3>
                  <p className='text-gray-600 mb-2'>
                    Published on January {item}, 2024
                  </p>
                  <p className='text-gray-700'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='py-20 bg-white'>
          <div className='container mx-auto px-6'>
            <h2 className='text-4xl font-bold mb-8 text-[#1e2d3d]'>
              Contact Information
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold mb-4 text-[#8b1538]'>
                  Address
                </h3>
                <p className='text-gray-700'>
                  123 University Avenue
                  <br />
                  Washington, DC 20001
                  <br />
                  United States
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold mb-4 text-[#8b1538]'>
                  Contact
                </h3>
                <p className='text-gray-700'>
                  Phone: (202) 555-0100
                  <br />
                  Email: info@wju.edu
                  <br />
                  Fax: (202) 555-0101
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
