import React from 'react'
import "./lichsu.css"
import { Link } from 'react-router-dom'

export default function Lichsu() {
    return (
        <div className="history">
            <div className="history__header">
                <h3 className='text-center'>Lịch sử đặt tour</h3>
                <div className="hr"></div>
            </div>
            <div className="history__content">
                <Link>
                    <div className="history__box" key={index}>
                        <img alt="" />
                        <div className="history__tour">
                            <div className="history--title">
                                <div className="history--name">Name</div>
                            </div>
                            <div className="history--infor">
                                <table>
                                    <tr>
                                        <th>Ngày khởi hành &emsp;&emsp;</th>
                                        <th>{ok.ngaydi}</th>
                                    </tr>
                                    <tr>
                                        <th>Thời gian</th>
                                        <th>Time</th>
                                    </tr>
                                    <tr>
                                        <th>Nơi khởi hành</th>
                                        <th>Vinh</th>
                                    </tr>
                                </table>
                                <table className="nmn">
                                    <tr>
                                        <th>Số người lớn &emsp;&emsp;</th>
                                        <th>People</th>
                                    </tr>
                                    <tr>
                                        <th>Số trẻ em</th>
                                        <th>People</th>
                                    </tr>
                                    <tr>
                                        <th>Số em bé</th>
                                        <th>People</th>
                                    </tr>
                                    <tr>
                                        <th>Tổng tiền</th>
                                        <th>100.000 vnđ</th>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
