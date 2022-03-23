import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      { name: '', path: './login'},
      { name: 'Home', path: './dashboard',
        children: [
          { name: 'Tổ chức gửi yêu cầu (SENDER)', path: './sender',
            children: [
              { name: 'Yêu cầu tra soát (DISPUTE)', path: './dispute',
                children: [
                  { name: 'Tạo yêu cầu (Create Dispute)', path: './add-dispute'},
                  { name: 'Sửa yêu cầu (Update Dispute)', path: './update-dispute'},
                  { name: 'Duyệt yêu cầu (Approve Dispute)', path: './approve-dispute'},
                  { name: 'Nhận trả lời (Receive Dispute Resp)', path: './receive-response'},
                  { name: 'Hiển thị yêu càu (Display Dispute Req)', path: './show-dispute-req'}
                ]
              },
              { name: 'Yêu cầu hoàn trả (RETURN)', path: './return',
                children: [
                  { name: 'Tạo yêu cầu (Create Return)', path: './update-return'},
                  { name: 'Sửa yêu cầu (Update Return)', path: './update-dispute'},
                  { name: 'Duyệt yêu cầu (Approve Return)', path: './approve-return'},
                  { name: 'Nhận trả lời (Receive Return Resp)', path: './receive-return-resp'}
                ]
              }
            ]
          },
          { name: 'Tổ chức nhận lệnh (RECEIVER)', path: './receiver',
            children: [
              { name: 'Nhận yêu cầu tra soát(Receive Dispute)', path: './receive-dispute'},
              { name: 'Sửa yêu cầu tra soát(Update Dispute)', path: './update-dispute'},
              { name: 'Duyệt yêu cầu tra soát(Approve Return)', path: './approve-dispute'},
              { name: 'Nhận yêu cầu hoàn trả (Receive Return)', path: './receive-return-req'}
            ]
          },
          { name: 'Quản lý hạn mức (DEBITCAP)', path: './debitcap',
            children: [
              { name: 'Đăng ký hạn mức (Register)', path: './register'},
              { name: 'Thay đổi hạn mức (Change)', path: './change'}
            ]
          },
          { name: 'Copy giao dịch gốc (Copy)', path: './inquiry-copy',
            children: [
              { name: 'Truy vấn thông tin (investigate)', path: './register'},
              { name: 'Copy giao dịch gốc (copy)', path: './copy'},
              { name: 'Lịch sử Copy giao dịch', path: './copy-history'}
            ]
          },
          { name: 'Báo cáo (Report)', path: './report',
            children: [
              { name: 'Giao dịch (transaction)', path: './transaction'},
              { name: 'Đối soát (reconciliation)', path: './reconciliation'},
              { name: 'Bù trừ (clearing)', path: './clearing'},
              { name: 'Quyết toán (statement)', path: './statement'},
              { name: 'Tổng hợp bản tin (message)', path: './traceTransaction'},
              { name: 'So sánh đối soát (compare recon)', path: './compare'},
              { name: 'Chạy job đối soát (run recon manually)', path: './runJob'}
            ]
          },
          { name: 'Config', path: './config',
            children: [
              { name: 'Quản lý người dùng (Users)', path: './list-user'},
              { name: 'Log người dùng', path: './trace-user'},
              { name: 'Quản lý file phí sử dụng (FEE Files)', path: './trace-file'},
              { name: 'Quản lý job phí sử dụng (Job Management)', path: './trace-job'}
            ]
          },
          { name: 'Tạo giao dịch hoàn trả', path: './list-return'}
        ]
      }
    ];
    return menu;
  }
}
