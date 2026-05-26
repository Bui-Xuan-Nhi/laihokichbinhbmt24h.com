'use strict';

const CONFIG = {
    // === Liên hệ – chỉ sửa ở đây, toàn site tự cập nhật ===
    phoneNumber: '0849819819',
    phoneDisplay: '0849 819 819',
    zaloNumber: '0849813813',
    zaloDisplay: '0849 813 813',
    email: 'info@laihokichbinhbmt24h.com',
    brandName: 'Tổng Đài Taxi BMT',

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
