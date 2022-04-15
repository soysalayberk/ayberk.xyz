import "./css/App.scss";

import {
  Avatar,
  Card,
  Col,
  Divider,
  Layout,
  List,
  Row,
  Space,
  Typography,
} from "antd";
import { Fragment, useEffect, useState } from "react";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkOutlined,
  MailOutlined,
} from "@ant-design/icons";

import Beis from "./assets/beispiel.png";
import Bix from "./assets/bix.png";
import Dwb from "./assets/dwb.jpeg";
import Graphs from "./Graphs";
import Nachh from "./assets/Nachh.png";
import Nextcl from "./assets/nextcloud.png";
import Pb from "./assets/pb.png";
import Webs from "./assets/Website.png";
import { grey } from "@ant-design/colors";
import js from "./assets/js.svg";
import reac from "./assets/react.svg";
import scss from "./assets/scss.svg";
import sh from "./assets/sh.svg";
import ts from "./assets/ts.svg";

const { Title, Text, Link } = Typography;
const { Header, Content, Footer } = Layout;

const Icon = (props: { link?: string; icon: any }): JSX.Element => {
  const { link, icon } = props;
  return link != null ? <Link href={link}>{icon}</Link> : <>{icon}</>;
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
    languages: [ts, reac, scss],
  },
  {
    title: "Website",
    link: "https://github.com/soysalayberk/ayberk.xyz",
    desc: "Fortlaufend",
    author: c[1],
    prevImg: Webs,
    languages: [ts, reac, scss],
  },
  {
    title: "Dotfiles",
    link: "https://github.com/soysalayberk/dotfiles",
    desc: "Fortlaufend",
    author: c[1],
    prevImg: Beis,
    languages: [sh],
  },
  {
    title: "dwb",
    link: "https://github.com/BixConcept/dwb",
    desc: "Fortlaufend",
    author: c[0],
    prevImg: Dwb,
    languages: [js, reac, scss],
  },
];

const listData = [
  {
    title: "Nextcloud",
    img: Nextcl,
    url: "https://cloud.ayberk.xyz",
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
      <Header style={{ backgroundColor: grey[7] }}>
        <Text style={{ color: "white" }}>ayberk.xyz</Text>
      </Header>
      <Content>
        <Title code style={{ marginTop: "1rem" }}>
          Projekte
        </Title>
        <Row style={{}} gutter={[24, 16]} justify="space-around">
          {data
            .sort((e, n) => {
              return e.title < n.title ? -1 : e.title > n.title ? 1 : 0;
            })
            .map((project) => {
              return (
                <Col span={getColumns()} key={project.title}>
                  <Card
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
                    extra={
                      <Space>
                        {project.languages.map((lang) => {
                          return <img src={lang} alt={lang} width="20px" />;
                        })}
                      </Space>
                    }
                    title={project.title}
                  >
                    <Card.Meta
                      description={<Fragment>{project.desc}</Fragment>}
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
        {/*
        <Title code>Graphen</Title>
        <Graphs />
        <Divider />
          */}
        <Title code>Dienste</Title>
        <List
          dataSource={listData}
          bordered
          itemLayout="vertical"
          style={{ textAlign: "left" }}
          size="small"
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.img} />}
                title={item.title}
                description={
                  <Link href={item.url}>
                    Hier <Icon icon={<LinkOutlined />} />
                  </Link>
                }
              />
            </List.Item>
          )}
        ></List>
      </Content>
      <Footer
        style={{
          backgroundColor: grey[7],
          height: "auto",
          bottom: 0,
          marginTop: "10%",
        }}
      >
        <Space>
          <Icon
            link="https://github.com/soysalayberk"
            icon={<GithubOutlined style={{ color: "white" }} />}
          />
          <Icon
            link="https://instagram.com/soysalayberk__"
            icon={<InstagramOutlined style={{ color: "white" }} />}
          />
          <Icon
            link="mailto:soysalayberk480@gmail.com"
            icon={<MailOutlined style={{ color: "white" }} />}
          />
        </Space>
      </Footer>
    </Layout>
  );
};

export default App;
