import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";

const projects = [
  {
    title: "Simple Landing Page",
    description:
      "Built a basic responsive landing page from scratch. Learned spacing, flexbox, and how small layout decisions affect readability.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

const currentFocus = [
  "Next.js",
  "Material-UI Design",
  "Social Connections",
  "Presentation of My Work",
];

const roadmap = [
  "Redux Toolkit",
  "Build a Small Real-World Website",
  "Learn Authorization Security",
  "Get My First Real Client (Small, Local, Honest)",
];

export default function Home() {
  const lastUpdated = " 2026 - 02 - 27";

  return (
    <Box sx={{ bgcolor: "#0f172a", color: "#e2e8f0", minHeight: "100vh" }}>
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={10}>
          <Box component="section" id="hero">
            <Stack spacing={4}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.7rem", md: "3.3rem" },
                  lineHeight: 1.15,
                  fontWeight: 700,
                  color: "#f8fafc",
                }}>
                I&apos;m learning to build websites.
                <br />
                Out loud. In public.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  color: "#cbd5e1",
                  maxWidth: 640,
                }}>
                No years of experience.
                <br />
                No fake confidence.
                <br />
                Just consistent work and visible progress.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  href="#projects"
                  variant="contained"
                  sx={{
                    bgcolor: "#38bdf8",
                    color: "#082f49",
                    fontWeight: 700,
                    px: 3,
                    py: 1.3,
                    "&:hover": { bgcolor: "#0ea5e9" },
                  }}>
                  See What I&apos;ve Built So Far
                </Button>
                <Button
                  href="#why"
                  variant="outlined"
                  sx={{
                    borderColor: "#38bdf8",
                    color: "#7dd3fc",
                    px: 3,
                    py: 1.3,
                    "&:hover": {
                      borderColor: "#0ea5e9",
                      bgcolor: "rgba(56, 189, 248, 0.08)",
                    },
                  }}>
                  Why This Site Exists
                </Button>
              </Stack>
            </Stack>
          </Box>

          <Box component="section" id="why">
            <Stack spacing={2}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2rem" },
                  fontWeight: 700,
                  color: "#f8fafc",
                }}>
                This is not a polished resume.
              </Typography>
              <Typography sx={{ color: "#cbd5e1", lineHeight: 1.8 }}>
                I don&apos;t have formal years of experience yet, and I&apos;m
                not trying to hide that.
                <br />I made this site to practice showing up, sharing what I
                build, and improving in public.
                <br />
                Every project here reflects what I&apos;m learning right now.
                <br />
                This page itself is part of that process: plan, build, ship,
                learn, repeat.
              </Typography>
            </Stack>
          </Box>

          <Box component="section" id="projects">
            <Stack spacing={3}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2rem" },
                  fontWeight: 700,
                  color: "#f8fafc",
                }}>
                Projects
              </Typography>
              {projects.map((project) => (
                <Card
                  key={project.title}
                  sx={{
                    bgcolor: "#1e293b",
                    color: "#e2e8f0",
                    borderRadius: 3,
                    boxShadow: "0px 8px 18px #3a508459",
                  }}>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "1.35rem",
                          fontWeight: 600,
                          color: "#f8fafc",
                        }}>
                        {project.title}
                      </Typography>
                      <Typography sx={{ color: "#cbd5e1" }}>
                        {project.description}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        flexWrap="wrap">
                        {project.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            sx={{
                              bgcolor: "rgba(56, 189, 248, 0.18)",
                              color: "#bae6fd",
                              borderRadius: 2,
                            }}
                          />
                        ))}
                      </Stack>
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
                    <Button
                      size="small"
                      href={project.liveUrl}
                      // target="_blank"
                      rel="noreferrer"
                      sx={{
                        color: "#7dd3fc",
                        "&:hover": { bgcolor: "rgba(125, 211, 252, 0.12)" },
                      }}>
                      View Live
                    </Button>
                    <Button
                      size="small"
                      href={project.codeUrl}
                      // target="_blank"
                      rel="noreferrer"
                      sx={{
                        color: "#7dd3fc",
                        "&:hover": { bgcolor: "rgba(125, 211, 252, 0.12)" },
                      }}>
                      View Code
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Stack>
          </Box>

          <Box component="section" id="focus">
            <Stack spacing={2}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2rem" },
                  fontWeight: 700,
                  color: "#f8fafc",
                }}>
                Things I&apos;m Currently Working On
              </Typography>
              <Stack
                component="ul"
                spacing={1.2}
                sx={{ pl: 3, m: 0, color: "#cbd5e1" }}>
                {currentFocus.map((item) => (
                  <Typography
                    component="li"
                    key={item}
                    sx={{ lineHeight: 1.8 }}>
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Box>

          <Box component="section" id="roadmap">
            <Stack spacing={2}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2rem" },
                  fontWeight: 700,
                  color: "#f8fafc",
                }}>
                What I&apos;m Learning Next
              </Typography>
              <Stack
                component="ul"
                spacing={1.2}
                sx={{ pl: 3, m: 0, color: "#cbd5e1" }}>
                {roadmap.map((item) => (
                  <Typography
                    component="li"
                    key={item}
                    sx={{ lineHeight: 1.8 }}>
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Box>

          <Box component="section" id="contact">
            <Stack spacing={3}>
              <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9 }}>
                If you&apos;re looking for someone early-stage, honest, and
                serious about learning, you can reach me here.
              </Typography>
              <Button
                href="mailto:idndnhydh@gmail.com"
                variant="contained"
                sx={{
                  alignSelf: "flex-start",
                  bgcolor: "#38bdf8",
                  color: "#082f49",
                  fontWeight: 700,
                  px: 3,
                  py: 1.3,
                  "&:hover": { bgcolor: "#0ea5e9" },
                }}>
                <EmailIcon /> Email 
              </Button>

              <Button
                href="https://t.me/Idndnh"
                variant="contained"
                sx={{
                  alignSelf: "flex-start",
                  bgcolor: "#38bdf8",
                  color: "#082f49",
                  fontWeight: 700,
                  px: 3,
                  py: 1.3,
                  "&:hover": { bgcolor: "#0ea5e9" },
                }}>
                <TelegramIcon /> Telegram
              </Button>
            </Stack>
          </Box>

          <Box
            component="footer"
            sx={{ borderTop: "1px solid rgba(148, 163, 184, 0.35)", pt: 4 }}>
            <Typography sx={{ color: "#94a3b8", fontSize: "0.9rem" }}>
              This site will change as I grow.
              <br />
              Last updated: {lastUpdated}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
