FactoryGirl.define do
  factory :bill do
    title { Faker::Lorem.sentence }
    summary { Faker::Lorem.sentence }
    official_title { Faker::Lorem.sentence }
    short_title { Faker::Lorem.sentence }
    popular_title { Faker::Lorem.sentence }
    congress_url { Faker::Internet.url }
  end
end