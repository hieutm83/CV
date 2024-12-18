---
title: "Tự Động Điều Chỉnh Hiển Thị Voucher Trên TikTok Shop"
summary: 'Việc kiểm tra các voucher trên TikTok Shop đôi khi gây khó chịu do cách bố trí mặc định. Bài viết này sẽ hướng dẫn cách thay đổi giao diện voucher để dễ kiểm tra hơn thông qua việc tùy chỉnh HTML và tạo bookmark tự động trên trình duyệt.'
date: '2024-10-12'
tags:
  - tiktok shop
  - html
  - javascript
images:
  - "https://i.imgur.com/UBOF9rI.jpeg"
---

Nếu bạn từng quản lý voucher trong chiến dịch TikTok Shop, chắc hẳn bạn đã gặp tình trạng giao diện voucher được xếp theo hàng ngang,
gây khó khăn trong việc kiểm tra khi số lượng voucher nhiều.

Giao diện mặc định này làm chúng ta phải cuộn ngang rất bất tiện.

![previewImage](https://i.imgur.com/tjofzQz.jpeg "Result")

Sau khi kiểm tra qua cấu trúc HTML của trang, tôi phát hiện vấn đề nằm ở thành phần sau:


```html
<div class="theme-arco-space theme-arco-space-horizontal theme-arco-space-align-center theme-m4b-space flex overflow-hidden items-stretch" 
	 data-tid="m4b_space" style="margin-top: 16px;">
```

![previewImage](https://i.imgur.com/FBycnVW.jpeg "Result")

Thành phần này sử dụng `theme-arco-space-horizontal` và thuộc tính `flex`, khiến các voucher xếp thành một hàng ngang.

***Giải pháp điều chỉnh HTML***

Để hiển thị voucher theo dạng lưới (grid) dễ nhìn hơn, chúng ta có thể sửa đổi đoạn HTML như sau:


```html
<div class="theme-arco-space theme-arco-space-vertical theme-arco-space-align-center theme-m4b-space grid overflow-hidden items-stretch" 
	 data-tid="m4b_space" style="margin-top: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
```

![previewImage](https://i.imgur.com/INE1TEL.jpeg "Result")


***Ý nghĩa của các thay đổi:***

1. **`theme-arco-space-vertical`**: Thay thế `theme-arco-space-horizontal` để chuyển hướng bố trí từ hàng ngang sang hàng dọc.

2. **`grid`**: Thay `flex` bằng `grid` để bố trí các phần tử theo dạng lưới.

3. **`grid-template-columns: 1fr 1fr`**: Chia bố cục thành hai cột bằng nhau.

4. **`gap: 16px`**: Tạo khoảng cách giữa các phần tử trong lưới, giúp giao diện thoáng hơn.


***Tự động hóa với Bookmarklet***

Để tránh thao tác chỉnh sửa HTML thủ công mỗi lần kiểm tra voucher, chúng ta có thể sử dụng một đoạn mã JavaScript nhỏ.
Đoạn mã này sẽ tự động cập nhật giao diện voucher khi bạn nhấn vào bookmark đã tạo.

![previewImage](https://i.imgur.com/UeFzu89.jpeg "Result")


***Đoạn mã bookmarklet:***


```javascript
javascript:(function(){
    document.querySelectorAll('.theme-arco-space.theme-arco-space-horizontal.theme-arco-space-align-center.theme-m4b-space').forEach(el => {
        el.classList.remove('theme-arco-space-horizontal', 'flex');
        el.classList.add('theme-arco-space-vertical', 'grid');
        el.style.display = 'grid';
        el.style.gridTemplateColumns = '1fr 1fr';
        el.style.gap = '16px';
    });
    document.querySelectorAll('.text-head-m').forEach(span => {
        span.textContent = 'CODE BY MINHHIEU';
    });
})();
```


***Hướng dẫn tạo bookmark:***

1. Mở trình duyệt (Chrome, Firefox, hoặc Edge).

2. Tạo một bookmark mới.

3. Đặt tên (ví dụ: "Fix TikTok Voucher Layout").

4. Sao chép đoạn mã JavaScript trên và dán vào phần URL của bookmark.

5. Lưu bookmark.


***Cách sử dụng:***

- Mở giao diện TikTok Shop, nơi hiển thị các voucher.

- Nhấn vào bookmark vừa tạo. Giao diện voucher sẽ được cập nhật ngay lập tức theo dạng lưới.


***Kết luận***

Với giải pháp này, việc kiểm tra các voucher trên TikTok Shop trở nên dễ dàng hơn rất nhiều. Chỉ với một lần thiết lập,
bạn có thể sử dụng bookmark bất kỳ lúc nào mà không cần thao tác chỉnh sửa phức tạp. Hy vọng bài viết này hữu ích cho bạn!


Thanks for reading. Cheers,


@monokaijs a.k.a @delimister


