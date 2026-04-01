'use strict';

const CONFIG = {
    // === Liên hệ – chỉ sửa ở đây, toàn site tự cập nhật ===
    phoneNumber: '0849813813',
    phoneDisplay: '0849 813 813',
    zaloNumber: '0849813813',
    email: 'info@laihokichbinhbmt24h.com',
    brandName: 'Lái Hộ BMT',

    // Địa chỉ
    addressStreet: 'Nguyễn Tất Thành',
    addressCity: 'TP. Buôn Ma Thuột',
    addressProvince: 'Đắk Lắk',
    get addressFull() {
        return `${this.addressStreet}, ${this.addressCity}, ${this.addressProvince}`;
    },
    get addressShort() {
        return `${this.addressCity}, ${this.addressProvince}`;
    },

    scrollOffset: 80,
};
