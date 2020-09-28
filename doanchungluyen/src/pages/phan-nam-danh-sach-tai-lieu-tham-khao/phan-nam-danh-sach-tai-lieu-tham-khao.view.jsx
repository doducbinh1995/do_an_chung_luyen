import React from 'react';
import { Danh_Sach_Tai_Lieu_Tham_Khao } from '../../js/danh-sach-tai-lieu-tham-khao';
import './phan-nam-danh-sach-tai-lieu-tham-khao.scss';
function TrangDanhSachThamKhao(props) {
    return (
        <div>
            {
                Danh_Sach_Tai_Lieu_Tham_Khao.map((TaiLieu, indexTaiLieu) => <RenderChiTietTaiLieuThamKhao index={indexTaiLieu + 1} bookName={TaiLieu.Ten} listAuthor={TaiLieu.Tac_Gia} />)
            }
        </div>
    )
}

function RenderChiTietTaiLieuThamKhao(props) {
    return <details>
        <summary className="alert alert-primary" role="alert">{props.index}. {props.bookName}</summary>
        <ul className="list-group">
            {
                props.listAuthor.map((authorName, indexData) => <li key={indexData} className="list-group-item">{authorName}</li>)
            }
        </ul>
    </details>
}

export default TrangDanhSachThamKhao