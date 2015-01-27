# Review

## Setup

Could not start application.  Broken seed operation

    ➜  openPAC git:(donation-view) rake db:seed
    No stripe.com API key was configured for environment development! this
    application will be
    unable to interact with stripe.com. You can set your API key with either the
    environment
    variable `STRIPE_SECRET_KEY` (recommended) or by setting
    `config.stripe.secret_key` in your
    environment file directly.
    "loading basic in"
    rake aborted!
    OpenURI::HTTPError: 403 Forbidden
    /Users/sgharms/doves/fp/openPAC/app/helpers/seed_helper.rb:22:in `block in
    get_basic_legislators_info_in'
    /Users/sgharms/doves/fp/openPAC/app/helpers/seed_helper.rb:20:in `times'
    /Users/sgharms/doves/fp/openPAC/app/helpers/seed_helper.rb:20:in
    `get_basic_legislators_info_in'
    /Users/sgharms/doves/fp/openPAC/app/helpers/seed_helper.rb:78:in
    `insert_basic_legislators'
    /Users/sgharms/doves/fp/openPAC/db/seeds.rb:3:in `<top (required)>'
    /Users/sgharms/.gem/ruby/2.1.2/gems/activesupport-4.2.0/lib/active_support/dependencies.rb:268:in
    `load'
    /Users/sgharms/.gem/ruby/2.1.2/gems/activesupport-4.2.0/lib/active_support/dependencies.rb:268:in
    `block in load'
    /Users/sgharms/.gem/ruby/2.1.2/gems/activesupport-4.2.0/lib/active_support/dependencies.rb:240:in
    `load_dependency'
    /Users/sgharms/.gem/ruby/2.1.2/gems/activesupport-4.2.0/lib/active_support/dependencies.rb:268:in
    `load'
    /Users/sgharms/.gem/ruby/2.1.2/gems/railties-4.2.0/lib/rails/engine.rb:547:in
    `load_seed'
    /Users/sgharms/.gem/ruby/2.1.2/gems/activerecord-4.2.0/lib/active_record/tasks/database_tasks.rb:250:in
    `load_seed'
    /Users/sgharms/.gem/ruby/2.1.2/gems/activerecord-4.2.0/lib/active_record/railties/databases.rake:180:in
    `block (2 levels) in <top (required)>'
    Tasks: TOP => db:seed
    (See full trace by running task with --trace)
  ➜  openPAC git:(donation-view)

Your seed file should not break me.  Blow up and tell me what's wrong if I'm
mising a key, but it's disheartening when I'm trying to get up and running
(quickly) and run into a brick wall.

## Seeds

This file needs some attention.  It's generally over-complex and hard to reason
about.  It would be helpful if you were to create a variety of auxiliary model
classes to help things out.  Here is a partial list of things that I see going
on the the seeds file:

1. Remove garbage user `a`
2. Why do we have `SeedHelper`.  Why don't we simply have classes that know how
   to do a task e.g.

   class LegislatorSeeder
    def initialize(....)
      ...
    end

    def seed!
      insert_basic_legislators
      insert_details
      insert_image_url
    end

    private

      def insert_basic_legislators
      end
      def insert_details
      end
      def insert_image_url
      end
   end
3.  I'd like to see a similar position for creating a `PositionSeeder`, that
would hide a lot of ugliness that's in the `seeds.rb` file
4.  Consider a class like: `StancesSeeder.new(users).seed!`

##  Tests

### Controller tests

You're underway, but you have a number that are `xit` out.  That's probably not
giving you important feedback.  The RSpec is OK, there are several places where
you pass hard-coded values.  The point of Factories is to avoid that sort of
hard-coded dependency.

### Factories

Factories are normally split up.  Your `all.rb` should be broken down into
files which tell me what is what.

### Integration

You have commented-out code which needs to be cleaned up.


### Model tests

These are largely ActiveRecord association tests.  They're not generating a lot
of enlightenment for you but test your schema.


## Migrations

Good.

## Misc

What's `db/assertions.rb`?


## JavaScript

`donationSlider` is extremely complex.  I have a hard time reading and
reasoning about it.  It's something where some architecture could help, but
wihtout it we're doing a lot of complex work in a series of anonymous
callbacks.  I would really like to see this refactored to be usable.

`stripe.js` could be named `stripe.js.erb` and then you could use ERB tags to
move the key based information out from rails-land and into this file e.g.

`Stripe.setPublishableKey('<%= ENV['STRIPE_PUBLISHABLE_KEY'] -%>');`

## Style

Looks pretty!


## App/

### Models

* Look good generally
* A few tiny ugly methods (see in-line note)

## Views

* There's a good bit of logic and calculation in the views, see inline notes
* Insufficient use of partials, there are a few places where you could
  really DRY out the views e.g. legislators#show
* learn to love `link_to`!



