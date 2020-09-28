import React, { lazy, Suspense } from 'react';
import './App.css';
import RouteCustom from './route';
import * as Urls from './common/urls';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
//--- Boostrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//--- default component
import ErrorBoundary from './components/error-log/error-log.view';
import LayoutComponent from './components/layout/layout.view';
//--- lazy component
const TrangMoDau = lazy(() => import('./pages/phan-mot-mo-dau/phan-mot-mo-dau.view'));
const TrangTinhToanThietBiChinh = lazy(() => import('./pages/phan-hai-tinh-toan-thiet-bi-chinh/phan-hai-tinh-toan-thiet-bi-chinh.view'));
const TrangTinhToanThietBiPhu = lazy(() => import('./pages/phan-ba-tinh-toan-thiet-bi-phu/phan-ba-tinh-toan-thiet-bi-phu.view'));
const TrangKetLuan = lazy(() => import('./pages/phan-bon-ket-luan/phan-bon-ket-luan.view'));
const TrangDanhSachThamKhao = lazy(() => import('./pages/phan-nam-danh-sach-tai-lieu-tham-khao/phan-nam-danh-sach-tai-lieu-tham-khao.view'));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className='loading-container-stack'>
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>}>
        <Router>
          <Switch>
            <RouteCustom path={Urls.TrangTinhToanThietBiChinh} LayoutComponent={LayoutComponent} ChilComponent={TrangTinhToanThietBiChinh} />
            <RouteCustom path={Urls.TrangTinhToanVaChonThietBiPhu} LayoutComponent={LayoutComponent} ChilComponent={TrangTinhToanThietBiPhu} />
            <RouteCustom path={Urls.TrangKetLuan} LayoutComponent={LayoutComponent} ChilComponent={TrangKetLuan} />
            <RouteCustom path={Urls.TrangDanhSachThamKhao} LayoutComponent={LayoutComponent} ChilComponent={TrangDanhSachThamKhao} />

            {/* All route stay at top of this */}
            <RouteCustom path={Urls.TrangMoDau} LayoutComponent={LayoutComponent} ChilComponent={TrangMoDau} />
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
