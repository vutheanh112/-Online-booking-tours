import { QuestionCircleOutlined } from '@ant-design/icons'
import { Button } from '@material-ui/core'
import { Popconfirm } from 'antd'
import React from 'react'
import "./duyettour.css"

export default function Duyettour() {
    return (
        <div className="duyettour">
            <div className="duyettour__header">
                <h3 className='text-center'>Duyệt tour</h3>
                <div className="hr"></div>
            </div>
            <div className="container">
                <div className="duyettour__content">

                    <div className="duyettour--name">
                        Address
                    </div>
                    <div className="duyettour--form">
                        <div className="giatour">
                            100.000 vnđ
                        </div>
                    </div>
                    <div className="btn__tour">
                        <Popconfirm title="Bạn có chắc chắn？" icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                            <Button color="primary" variant="contained" className="mr-1">Đồng ý</Button>
                        </Popconfirm>
                        <Popconfirm title="Bạn có chắc chắn？" icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                            <Button color="secondary" variant="contained">Huỷ</Button>
                        </Popconfirm>
                    </div>
                </div>
            </div>
        </div>
    )
}
