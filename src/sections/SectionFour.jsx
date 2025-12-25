import { Box, Button, Typography } from "@mui/material";
import ReviewCard from "../components/ReviewCard";
import avatarImage from "../assets/images/Person-1.png";
import avatarImage from "../assets/images/Person-2.png";
import avatarImage from "../assets/images/Person-3.png";
import avatarImage from "../assets/images/Person-4.png";
import avatarImage from "../assets/images/Person-5.png";
import avatarImage from "../assets/images/Person-6.png";
import Question from "../components/Question";
import ButtonResume from "../components/Button_resume";

const SectionFour = () => {
  const reviewCardData = [
    {
      name: "Aye Chan Kyaw (Eric)",
      position: "MD of Earthlike Co.,Ltd.",
      avatar: avatarImage,
      content: `“His UI/UX design skills transformed our app into a user-friendly,
        visually appealing experience. They listened carefully to our needs and
        delivered a seamless, intuitive design that truly improved our product.
        Highly professional and easy to collaborate with — I’d definitely
        recommend them for any design project.”`,
    },
    {
      name: "Kaung Myat Cho",
      position: "Backend Developer @ Earthlike",
      avatar: avatarImage,
      content: `“Working with Freddie was a fantastic experience. He is truly understood my brand and delivered a logo that perfectly captures its essence. The design was creative, unique, and professional, helping my business stand out. Communication was smooth, and the project was completed on time.”`,
    },
    {
      name: "Nant Su Sandi Shwe",
      position: "Mobile Developer @ Earthlike",
      avatar: avatarImage,
      content: `“I’ve seen Freddie work on UI/UX design projects, and honestly, they’re amazing! He really know how to make apps and websites look great while keeping things super easy to use. Plus, they’re super creative and always come up with smart solutions.”`,
    },
    {
      name: "Thaw Tar Chan Myae (Ruby)",
      position: "Founder of Beauty By Ruby",
      avatar: avatarImage,
      content: `“I’m thrilled with the logo design created by Freddie. They captured the essence of my brand perfectly and delivered a unique, memorable logo that truly stands out. The process was smooth and professional, with great communication throughout. I highly recommend Freddie for anyone looking for outstanding logo design work.”`,
    },
    {
      name: "Ar Jun",
      position: "Backend Developer @ KBZ",
      avatar: avatarImage,
      content: `“I’ve watched Freddie create some amazing UI/UX designs, and they’re seriously talented! He know how to make apps and websites look awesome while keeping them super easy to use.”`,
    },
    {
      name: "Ye Myat Thu",
      position: "Director @ Earthlike Co.,Ltd.",
      avatar: avatarImage,
      content: `“Freddie has been an invaluable asset to our design team. Their expertise in UI/UX design consistently elevates our products by creating intuitive, user-centered interfaces that enhance overall user satisfaction. They demonstrate strong creativity, attention to detail, and a deep understanding of user behavior. He is a awesome Senior UI/UX Designer of our company.”`,
    },
  ];

  return (
    <Box>
      <Typography
        sx={{
          pt: { xl: "70px", lg: "70px", md: "70px", sm: "70px", xs: "35px" },
          fontSize: { xl: 48, lg: 48, md: 48, sm: 48, xs: 40 },
          fontWeight: "bold",
          mb: "36px",
        }}
      >
        What people say <span style={{ color: "#FF0B55" }}>about me!</span>
      </Typography>
      <ReviewCard data={reviewCardData} />
      <Box
        sx={{
          mt: "70px",
          display: "flex",
          gap: "80px",
          flexWrap: {
            xl: "nowrap",
            lg: "nowrap",
            md: "nowrap",
            sm: "wrap",
            xs: "wrap",
          },
        }}
      >
        {/* Left  */}
        <Box
          sx={{
            width: { xl: "42%", lg: "42%", md: "100%", sm: "100%", xs: "100%" },
          }}
        >
          <Typography
            sx={{
              minWidth: 320,
              height: "auto",
              fontSize: { xl: 48, lg: 48, md: 48, sm: 48, xs: 39 },
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            Got questions? I've got{" "}
            <span style={{ color: "#ff0b55" }}>answers.</span>
          </Typography>
          <Typography
            sx={{
              mt: "10px",
              fontSize: { xl: 16, lg: 16, md: 16, sm: 16, xs: 14 },
              width: {
                xl: "400px",
                lg: "400px",
                md: "400px",
                sm: "400px",
                xs: "300px",
              },
              height: "64px",
              color: "#505050",
            }}
          >
            Got questions or need advice? Get clear insights to move forward.
          </Typography>

          <Box
            sx={{
              mt: {
                xl: "87px",
                lg: "87px",
                md: "87px",
                sm: "87px",
                xs: "20px",
              },
              mb: {
                xl: "70px",
                lg: "70px",
                md: "70px",
                sm: "20px",
                xs: "20px",
              },
            }}
          >
            <ButtonResume />
          </Box>
        </Box>
        {/* Right  */}
        <Box
          sx={{
            width: { xl: "58%", lg: "58%", md: "100%", sm: "100%", xs: "100%" },
            mb: "50px",
          }}
        >
          <Question />
        </Box>
      </Box>
    </Box>
  );
};
export default SectionFour;
