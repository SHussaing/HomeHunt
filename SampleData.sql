INSERT INTO Users (Email, FirstName, LastName, PhoneNumber, PasswordHash)
VALUES ('ali.alhashmi@example.com', 'Ali', 'Al Hashmi', '973-3600-1234', 'hashed_password_1'),
       ('fatima.alqahtani@example.com', 'Fatima', 'Al Qahtani', '973-3600-5678', 'hashed_password_2'),
       ('mohammed.alzayani@example.com', 'Mohammed', 'Al Zayani', '973-3600-9101', 'hashed_password_3'),
       ('layla.almansoor@example.com', 'Layla', 'Al Mansoor', '973-3600-1121', 'hashed_password_4'),
       ('khalid.alnuaimi@example.com', 'Khalid', 'Al Nuaimi', '973-3600-3141', 'hashed_password_5'),
       ('sara.alfarsi@example.com', 'Sara', 'Al Farsi', '973-3600-5161', 'hashed_password_6'),
       ('ahmed.almahdi@example.com', 'Ahmed', 'Al Mahdi', '973-3600-7181', 'hashed_password_7'),
       ('reem.aljuboori@example.com', 'Reem', 'Al Juboori', '973-3600-9202', 'hashed_password_8'),
       ('yasir.alkhalifa@example.com', 'Yasir', 'Al Khalifa', '973-3600-1323', 'hashed_password_9'),
       ('noor.alhasan@example.com', 'Noor', 'Al Hasan', '973-3600-4354', 'hashed_password_10');


-- Listings for Ali Al Hashmi
INSERT INTO Listings (UserID, Name, Price, City, HouseNumber, RoadNumber, BlockNumber, Wifi, WaterElectricity)
VALUES (1, 'Modern Villa', 1500.00, 'Manama', 12, 45, 340, 1, 1),
       (1, 'Cozy Apartment', 800.00, 'Riffa', 34, 210, 905, 1, 1),
       (1, 'Spacious Flat', 950.00, 'Isa Town', 78, 122, 710, 0, 1),
       (1, 'Luxurious Penthouse', 3000.00, 'Juffair', 56, 400, 341, 1, 1),
       (1, 'Family House', 1200.00, 'Budaiya', 91, 60, 544, 1, 1);

-- Listings for Fatima Al Qahtani
INSERT INTO Listings (UserID, Name, Price, City, HouseNumber, RoadNumber, BlockNumber, Wifi, WaterElectricity)
VALUES (2, 'Stylish Apartment', 950.00, 'Saar', 22, 101, 525, 1, 1),
       (2, 'Luxury Villa', 1800.00, 'Manama', 10, 55, 345, 1, 1),
       (2, 'Budget Flat', 600.00, 'Muharraq', 43, 200, 111, 0, 1),
       (2, 'Beachfront Condo', 2200.00, 'Amwaj Islands', 2, 5, 257, 1, 1),
       (2, 'Garden House', 1600.00, 'Janabiya', 77, 215, 717, 1, 1);

-- Listings for Mohammed Al Zayani
INSERT INTO Listings (UserID, Name, Price, City, HouseNumber, RoadNumber, BlockNumber, Wifi, WaterElectricity)
VALUES (3, 'Elegant Villa', 2500.00, 'Manama', 8, 42, 123, 1, 1),
       (3, 'Central Apartment', 1000.00, 'Adliya', 67, 331, 647, 1, 1),
       (3, 'Family Home', 1300.00, 'Sanabis', 55, 121, 276, 1, 1),
       (3, 'Penthouse Suite', 4000.00, 'Seef', 12, 90, 789, 1, 1),
       (3, 'Modern House', 1700.00, 'Aali', 91, 121, 454, 1, 1);

-- Listings for Layla Al Mansoor
INSERT INTO Listings (UserID, Name, Price, City, HouseNumber, RoadNumber, BlockNumber, Wifi, WaterElectricity)
VALUES (4, 'Sunny Apartment', 850.00, 'Gudaibiya', 28, 94, 512, 0, 1),
       (4, 'Cozy Cottage', 1200.00, 'Manama', 7, 56, 242, 1, 1),
       (4, 'Luxury Home', 1800.00, 'Juffair', 81, 300, 354, 1, 1),
       (4, 'City Center Flat', 950.00, 'Manama', 29, 88, 632, 0, 1),
       (4, 'Bahraini Villa', 2500.00, 'Riffa', 36, 120, 654, 1, 1);

-- Listings for Khalid Al Nuaimi
INSERT INTO Listings (UserID, Name, Price, City, HouseNumber, RoadNumber, BlockNumber, Wifi, WaterElectricity)
VALUES (5, 'Spacious Apartment', 1200.00, 'Saar', 45, 210, 603, 1, 1),
       (5, 'Luxury Penthouse', 3500.00, 'Amwaj Islands', 56, 9, 257, 1, 1),
       (5, 'Family Villa', 1600.00, 'Budaiya', 34, 15, 111, 1, 1),
       (5, 'Modern Condo', 1400.00, 'Seef', 20, 88, 905, 0, 1),
       (5, 'Downtown Flat', 950.00, 'Manama', 87, 32, 217, 1, 1);

-- Listings for Sara Al Farsi
INSERT INTO Listings (UserID, Name, Price, City, HouseNumber, RoadNumber, BlockNumber, Wifi, WaterElectricity)
VALUES (6, 'Charming Villa', 2400.00, 'Riffa', 11, 58, 512, 1, 1),
       (6, 'Urban Apartment', 1000.00, 'Manama', 67, 101, 622, 1, 1),
       (6, 'Seaside Condo', 2800.00, 'Amwaj Islands', 35, 7, 489, 1, 1),
       (6, 'Suburban Home', 1300.00, 'Aali', 52, 215, 333, 1, 1),
       (6, 'Elegant Flat', 900.00, 'Sanabis', 91, 121, 144, 0, 1);

-- Listings for Ahmed Al Mahdi
INSERT INTO Listings (UserID, Name, Price, City, HouseNumber, RoadNumber, BlockNumber, Wifi, WaterElectricity)
VALUES (7, 'Contemporary Villa', 2200.00, 'Juffair', 22, 200, 365, 1, 1),
       (7, 'Budget Apartment', 700.00, 'Manama', 9, 32, 123, 0, 1),
       (7, 'City Villa', 1800.00, 'Budaiya', 13, 55, 432, 1, 1),
       (7, 'Luxury Penthouse', 3200.00, 'Seef', 71, 305, 678, 1, 1),
       (7, 'Spacious House', 1700.00, 'Riffa', 88, 121, 544, 1, 1);

-- Listings for Reem Al Juboori
INSERT INTO Listings (UserID, Name, Price, City, HouseNumber, RoadNumber, BlockNumber, Wifi, WaterElectricity)
VALUES (8, 'Cozy Home', 1500.00, 'Janabiya', 21, 43, 234, 1, 1),
       (8, 'Luxury Condo', 2800.00, 'Amwaj Islands', 99, 12, 765, 1, 1),
       (8, 'Urban Flat', 950.00, 'Manama', 45, 210, 332, 0, 1),
       (8, 'Beach Villa', 3300.00, 'Amwaj Islands', 65, 9, 521, 1, 1),
       (8, 'Central Apartment', 1000.00, 'Adliya', 22, 64, 897, 1, 1);

-- Listings for Yasir Al Khalifa
INSERT INTO Listings (UserID, Name, Price, City, HouseNumber, RoadNumber, BlockNumber, Wifi, WaterElectricity)
VALUES (9, 'Elegant House', 1800.00, 'Riffa', 33, 150, 312, 1, 1),
       (9, 'Stylish Apartment', 950.00, 'Juffair', 87, 110, 431, 1, 1),
       (9, 'Spacious Villa', 2400.00, 'Budaiya', 45, 215, 767, 1, 1),
       (9, 'Downtown Condo', 1100.00, 'Manama', 20, 45, 187, 1, 1),
       (9, 'Family Home', 1700.00, 'Sanabis', 32, 100, 654, 1, 1);

-- Listings for Noor Al Hasan
INSERT INTO Listings (UserID, Name, Price, City, HouseNumber, RoadNumber, BlockNumber, Wifi, WaterElectricity)
VALUES (10, 'Modern Flat', 1300.00, 'Saar', 18, 25, 333, 1, 1),
       (10, 'Luxury Penthouse', 3500.00, 'Seef', 40, 72, 987, 1, 1),
       (10, 'Charming Villa', 2100.00, 'Budaiya', 23, 101, 543, 1, 1),
       (10, 'Cozy Apartment', 900.00, 'Manama', 57, 320, 222, 0, 1),
       (10, 'Elegant Home', 2500.00, 'Janabiya', 39, 12, 678, 1, 1);
