import React from 'react';
import * as Urls from '../../common/urls';
import { Link, useLocation } from 'react-router-dom';
function LeftNavbar(props) {
    const location = useLocation();
    return (
        <div className="list-group">
            <RenderItemInlist urlPage={Urls.TrangMoDau} label="Mở đầu" currentUrl={location.pathname} />
            <RenderItemInlist urlPage={Urls.TrangTinhToanThietBiChinh} label="Tính toán kỹ thuật thiết bị chính" currentUrl={location.pathname} />
            <RenderItemInlist urlPage={Urls.TrangTinhToanVaChonThietBiPhu} label="Tính toán và chọn thiết bị phụ" currentUrl={location.pathname} />
            <RenderItemInlist urlPage={Urls.TrangKetLuan} label="Kết luận" currentUrl={location.pathname} />
            <RenderItemInlist urlPage={Urls.TrangDanhSachThamKhao} label="Tài liệu tham khảo" currentUrl={location.pathname} />
        </div>
    )
}

function RenderItemInlist(props) {
    const activeClass = (props.currentUrl === props.urlPage) ? 'active' : '';
    return <Link to={props.urlPage} className={`list-group-item list-group-item-action ${activeClass}`}>{props.label}</Link>
}

export default LeftNavbar