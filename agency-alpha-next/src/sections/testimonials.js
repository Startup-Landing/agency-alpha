/** @jsx jsx */
import dynamic from 'next/dynamic';
import { jsx, Box, Container } from 'theme-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
const Testimonial = dynamic(() => import('components/cards/testimonial'));
// import Testimonial from 'components/cards/testimonial';
import avatar1 from 'assets/images/testimonials/1.png';
import avatar2 from 'assets/images/testimonials/2.png';
import avatar3 from 'assets/images/testimonials/3.png';
import avatar4 from 'assets/images/testimonials/4.png';
import avatar5 from 'assets/images/testimonials/5.png';
import avatar6 from 'assets/images/testimonials/6.png';
import avatar7 from 'assets/images/testimonials/7.png';
import avatar8 from 'assets/images/testimonials/8.png';

const data = [
  [
    {
      id: 1,
      avatar: avatar1,
      name: 'Veona Watson',
      username: '@hi.veona',
      text: `I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you`,
    },
    {
      id: 2,
      avatar: avatar2,
      name: 'Minnie Horn',
      username: '@hello.mimmie',
      text: `I would like to take this opportunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.`,
    },
  ],
  [
    {
      id: 3,
      avatar: avatar3,
      name: 'Merryn Manley',
      username: '@merryn.manley',
      text: `Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.`,
    },
    {
      id: 4,
      avatar: avatar4,
      name: 'Paseka Nku',
      username: '@hey.nku',
      text: `I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you`,
    },
  ],
  [
    {
      id: 5,
      avatar: avatar5,
      name: 'Cherice Justin',
      username: '@cherice.me',
      text: `Thank you for all your help. Your service was excellent and very FAST.`,
    },
    {
      id: 6,
      avatar: avatar6,
      name: 'Thais Carballal',
      username: '@myself.thais',
      text: `For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend`,
    },
  ],
  [
    {
      id: 7,
      avatar: avatar7,
      name: 'Veona Watson',
      username: '@hi.veona',
      text: `I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you`,
    },
    {
      id: 8,
      avatar: avatar8,
      name: 'Minnie Horn',
      username: '@hello.mimmie',
      text: `I would like to take this opportunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.`,
    },
  ],
  [
    {
      id: 9,
      avatar: avatar1,
      name: 'Merryn Manley',
      username: '@merryn.manley',
      text: `Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.`,
    },
    {
      id: 10,
      avatar: avatar2,
      name: 'Paseka Nku',
      username: '@hey.nku',
      text: `I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you`,
    },
  ],
  [
    {
      id: 11,
      avatar: avatar3,
      name: 'Cherice Justin',
      username: '@cherice.me',
      text: `Thank you for all your help. Your service was excellent and very FAST.`,
    },
    {
      id: 12,
      avatar: avatar4,
      name: 'Thais Carballal',
      username: '@myself.thais',
      text: `For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend`,
    },
  ],
];

const Testimonials = () => {
  const options = {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What client say about us"
          description="Customer testimonial"
        />
      </Container>
      <Swiper sx={styles.carousel} {...options}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map((slide) => (
              <Testimonial key={slide.id} data={slide} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Box sx={styles.testimonials}></Box> */}
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: '#FFFCF7',
    pt: [10, null, null, 9, 10, 11, 11],
    pb: [7, null, null, 7, 7, 9, 9],
  },
  heading: {
    mb: [7, null, null, null, 8],
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  carousel: {
    '&.swiper-container': {
      pb: [8],
      pl: [6, null, null, 0],
      pr: [6, null, null, 0],
    },
  },
};
