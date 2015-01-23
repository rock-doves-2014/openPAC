# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150123001103) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bill_votes", force: :cascade do |t|
    t.integer "bill_id"
    t.integer "politician_id"
  end

  create_table "bills", force: :cascade do |t|
    t.string "title"
    t.string "summary"
    t.string "official_title"
    t.string "short_title"
    t.string "popular_title"
    t.string "congress_url"
  end

  create_table "issues", force: :cascade do |t|
    t.text "description"
  end

  create_table "politician_stances", force: :cascade do |t|
    t.integer "politician_id"
    t.integer "stance_id"
  end

  create_table "politicians", force: :cascade do |t|
    t.string "bioguide_id"
    t.string "first_name"
    t.string "last_name"
    t.string "middle_name"
    t.string "nickname"
    t.string "name_suffix"
    t.string "party"
    t.string "phone"
    t.string "website"
    t.string "office"
    t.string "contact_form"
    t.string "fax"
    t.string "twitter_id"
    t.string "campaign_twitter_ids"
    t.string "youtube_id"
    t.string "facebook_id"
  end

  create_table "positions", force: :cascade do |t|
    t.integer "issue_id"
    t.text    "description"
  end

  create_table "stances", force: :cascade do |t|
    t.integer "user_id"
    t.integer "position_id"
  end

  create_table "upvotes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "stance_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
