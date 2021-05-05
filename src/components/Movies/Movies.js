import React from "react";
import "./Movies.css";

import Row from "../Row";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const movies = [
    {
        name: "33 слова о дизайне",
        duration: 107,
        like: true,
        thumbnail:
            "https://cvws.icloud-content.com/B/AbLB01RKJXD5h5q5FtDEdO_HERwWAZduMpJhRyFz2y8qqrJcnkDepHg4/first_movie.jpg?o=Akd5DC7-sXZD5NVOkMqTf2tchHKAteeM8K4KD3_Z2_ka&v=1&x=3&a=CAogqoqvKkRZIchhG4g_91ENBUCh6R9YTpMHdm6WsPlZWiESbRDmiOTiky8YhoCb45MvIgEAUgTHERwWWgTepHg4aiapq6auvphW_1OlF__xQHaFhGbiHy4YVTpz5QrqCNXrZ-DpTYQkunImWeiCP6p-ofsoH8HXGePyTwxrJhwZ18O8g7ZBvQADAjENrWiEA2s&e=1620216037&fl=&r=c67c0f57-51ff-4bc1-8fc8-8d962bc5c339-1&k=wMALli7ogHek3VpfVUu4mA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=56&s=ziKsSyJl00_Sk553b0TeICsjCJE&cd=i",
    },
    {
        name: "Киноальманах «100 лет дизайна»",
        duration: 107,
        like: false,
        thumbnail:
            "https://cvws.icloud-content.com/B/AeJng_jd_lWWo2GMVDLs0MoO2uW0AacHt0HO-GVDO-mPENj7G9P0YMuf/second_movie.jpg?o=AnVEgzYUrB5FGLjEG33RFDvVj32YOJq3j7Oxtvv00fYz&v=1&x=3&a=CAog1XXo57qm35IbhyjGFgh8pP1VGmDnr5Wd3grs746rBCYSbRC84Oziky8Y3Nej45MvIgEAUgQO2uW0WgT0YMufaiaruZOyICW3aPZuQXwGgDvUZbD8y0AyqzvYZltHTU0jhOnVqo1_t3Imvx7kDk1MWFloH9gJhlTaMK1r8OxxL5SGJiYKTQIvoozaHr9D4N0&e=1620216179&fl=&r=f93d3592-23ed-4dec-9934-88e1da22b29c-1&k=GIy9uwtoErrDoxHn_dOzhw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=56&s=q6rs_XN43Q3iF1Gt9LKt_hN69DE&cd=i",
    },
    {
        name: "В погоне за Бенкси",
        duration: 102,
        like: true,
        thumbnail:
            "https://cvws.icloud-content.com/B/AUuDjdeMjKpnNzeAINC35wu7_PB3AdSfFsU-YpF3G3uZ4IRnQzW1RMA6/third_movie.jpg?o=Aghd8kVPGg70dU_ls49NVDepT-e1ghhQLY0BheShGfDJ&v=1&x=3&a=CAogU1fobZAkAh6pOsqqpgRpDcsd7X9IZO61fDW1a9MXsw0SbRDD4Oziky8Y49ej45MvIgEAUgS7_PB3WgS1RMA6aib3vPG5-BAS9P_HxsUHyxm6gOftNTttsbrdxeH1JXLG4DXzr26sJHIm6deH8QfZkm97-FM9IMObEXUtBI62YZ3Sa-kjW9scGJbAUSUMxkA&e=1620216179&fl=&r=f93d3592-23ed-4dec-9934-88e1da22b29c-1&k=b6prOw2Ln33R1OQxNOH4-Q&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=56&s=metkYUeaGvOTy10wr78TKgwAihI&cd=i",
    },
    {
        name: "Баския: Взрыв реальности",
        duration: 81,
        like: false,
        thumbnail:
            "https://cvws.icloud-content.com/B/AXabMgbBDtwGQXUd9HlvoHjeSkXTAVhMme-bugG1obyZYyKJCKN5NJbB/fourth_movie.jpg?o=AlOQmgr_lyZ6LYXeH-TCCUb-8tCDZGrwCcGdhWyYhTh8&v=1&x=3&a=CAogQHlpLsrZHUdWHgPujTSS7AXt-Vsr_jlBQeRiF0W4bFQSbRC04Oziky8Y1Nej45MvIgEAUgTeSkXTWgR5NJbBaiblnKDbjusaOTqLQoNIPKVIb3fkAC-HooFxeXUkIPWe7y-qRexOOHImx7djxffJDR8MhEbWc3pzx069exCHMBXpCjo_r3h2TuA0toSPNNM&e=1620216179&fl=&r=f93d3592-23ed-4dec-9934-88e1da22b29c-1&k=pmQO0Sk4jifaTdS5jnoD0g&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=56&s=hk2rzIVoh0PQZmVbSQuyH2ElSTI&cd=i",
    },
];

function Movies({ loggedIn }) {
    return (
        <div className="movies">
            <Header loggedIn={loggedIn} />
            <Row>
                <SearchForm />
                <MoviesCardList movies={movies} />
                <button className="movies__more-button" type="button">
                    Ещё
                </button>
                <Footer />
            </Row>
        </div>
    );
}

export default Movies;
