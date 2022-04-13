import "./App.css";

import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Layout,
  Row,
  Space,
  Typography,
} from "antd";
import { GithubOutlined, InstagramOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

import Beis from "./assets/beispiel.png";
import Bix from "./assets/bix.png";
import Graphs from "./Graphs";
import Nachh from "./assets/Nachh.png";
import Pb from "./assets/pb.png";
import Webs from "./assets/Website.png";
import { grey } from "@ant-design/colors";

const { Title, Text, Link } = Typography;
const { Header, Content, Footer } = Layout;

const Icon = (props: { link: string; icon: any }): JSX.Element => {
  const { link, icon } = props;
  return <Link href={link}>{icon}</Link>;
};

const c = [
  {
    name: "BixConcept",
    gh: "https://github.com/BixConcept",
    img: Bix,
  },
  { name: "me", gh: "https://github.com/soysalayberk", img: Pb },
];

const data = [
  {
    title: "SV Nachhilfeplattform",
    link: "https://github.com/BixConcept/tutoring-frontend",
    desc: "Jan. 2022 - Apr. 2022",
    author: c[0],
    prevImg: Nachh,
  },
  {
    title: "Website",
    link: "https://github.com/soysalayberk/ayberk.xyz",
    desc: "Fortlaufend",
    author: c[1],
    prevImg: Webs,
  },
  {
    title: "Dotfiles",
    link: "https://github.com/soysalayberk/dotfiles",
    desc: "Fortlaufend",
    author: c[1],
    prevImg: Beis,
  },
  {
    title: "dwb",
    link: "https://github.com/BixConcept/dwb",
    desc: "Fortlaufend",
    author: c[0],
    prevImg: "",
  },
];

const App = (): JSX.Element => {
  const [wW, setWW] = useState(0);
  let resizeWindow = () => {
    setWW(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const getColumns = () => {
    if (window.innerWidth > 1100) return 8;
    if (window.innerWidth < 700) return 24;
    if (window.innerWidth < 1100) return 12;
  };

  return (
    <Layout className="App" style={{ textAlign: "center" }}>
      <Header style={{ backgroundColor: grey[0] }}>
        <Text>Moin</Text>
      </Header>
      <Content>
        <Divider />
        <Title code>Projekte</Title>
        <Row style={{}} gutter={[24, 16]} justify="space-around">
          {data
            .sort((e, n) => {
              return e.title < n.title ? -1 : e.title > n.title ? 1 : 0;
            })
            .map((project) => {
              return (
                <Col span={getColumns()} key={project.title}>
                  <Card
                    style={{ width: "100%" }}
                    cover={
                      <div style={{ overflow: "hidden", height: "200px" }}>
                        <img
                          alt=""
                          src={project.prevImg}
                          style={{ height: "100%" }}
                        />
                      </div>
                    }
                    actions={[
                      <Icon link={project.link} icon={<GithubOutlined />} />,
                    ]}
                  >
                    <Card.Meta
                      title={project.title}
                      description={project.desc}
                      avatar={
                        <Link href={project.author.gh}>
                          <Avatar src={project.author.img} />
                        </Link>
                      }
                    />
                  </Card>
                </Col>
              );
            })}
        </Row>
        <Divider />
        <Title code>Graphen</Title>
        <Graphs />
        <Divider />
        <Button type="primary">Moin</Button>
      </Content>
      <Footer>
        <Space>
          <Icon
            link="https://github.com/soysalayberk"
            icon={<GithubOutlined />}
          />
          <Icon
            link="https://instagram.com/soysalayberk__"
            icon={<InstagramOutlined />}
          />
        </Space>
      </Footer>
    </Layout>
  );
};

export default App;
