# Expense Tracker

Expense Tracker, kişisel harcamalarınızı takip etmenize olanak tanıyan bir mobil uygulamadır. Bu uygulama, React Native kullanılarak geliştirilmiştir ve kullanıcıların gelir ve giderlerini kolayca kaydetmelerini, kategorilere ayırmalarını ve finansal durumlarını analiz etmelerini sağlar.

## Özellikler
- Gelir ve gider ekleme
- Harcamaları kategorilere ayırma
- Toplam gelir ve giderlerin özetini görme
- Kullanıcı dostu arayüz
- React Native ile platformlar arası destek (iOS ve Android)

## Projeyi Çalıştırma

### Gereksinimler
Projeyi çalıştırmadan önce aşağıdaki araçların sisteminizde kurulu olduğundan emin olun:
- **Node.js** (v16 veya üzeri)
- **Yarn** (veya npm)
- **React Native CLI**
- **Android Studio** (Android için) veya **Xcode** (iOS için)

### Kurulum Adımları
1. **Depoyu Klonlayın**
   ```bash
   git clone https://github.com/kullaniciadi/ExpenseTracker-RN1.git
   cd ExpenseTracker-RN1

2. **Bağımlılıkları Yükleyin**
    yarn install

3. **Android için Gerekli Ayarları Yapın**

Android Studio'yu açın ve gerekli SDK'ları yükleyin.
Bir Android emülatörü oluşturun veya fiziksel bir cihaz bağlayın.

4. **iOS için Gerekli Ayarları Yapın**

macOS kullanıyorsanız, iOS bağımlılıklarını yüklemek için aşağıdaki komutu çalıştırın:
  cd ios && pod install && cd ..

5. **Uygulamayı Çalıştırın**
Android için:
  yarn android
iOS için:
  yarn ios

6. **Testleri Çalıştırın** Testleri çalıştırmak için aşağıdaki komutu kullanabilirsiniz:
  yarn test

Notlar
Uygulama geliştirme sırasında herhangi bir hata alırsanız, React Native belgelerine göz atabilir veya terminaldeki hata mesajlarını inceleyerek çözüm arayabilirsiniz.
iOS uygulamasını çalıştırmak için bir macOS cihazına ihtiyacınız vardır.

Katkıda Bulunma
Projeye katkıda bulunmak isterseniz, lütfen bir pull request gönderin veya bir issue açarak önerilerinizi paylaşın.
