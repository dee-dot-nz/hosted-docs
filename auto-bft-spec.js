var start, verify_count_start, verify_count_strategy, verify_count_people, verify_count_finances, verify_count_operations, verify_count_sales, verify_count_brand, verify_count_submit, available_score, available_strategy, available_people, available_finances, available_operations, available_sales, available_brand, total_score, business_name, total_strategy, total_people, total_finances, total_operations, total_sales, total_brand, business_website, strategy_one, contact_name, business_industry, strategy_two, people_one, contact_job_title, business_region, strategy_three, people_two, finances_one, contact_email, business_staff_range, strategy_four, people_three, finances_two, operations_one, sales_one, brand_one, accept_terms, business_rev_range, strategy_five, people_four, finances_three, operations_two, sales_two, brand_two, strategy_six, people_five, finances_four, operations_three, sales_three, brand_three, strategy_seven, people_six, finances_five, operations_four, sales_four, brand_four, people_seven, finances_six, operations_five, strategy, sales_five, brand_five, people_eight, finances_seven, operations_six, result_strategy, sales_six, brand_six, people_nine, finances_eight, operations_seven, result_people, sales_seven, finances_nine, operations_eight, result_finances, operations_nine, result_operations, contact_phone, operations_ten, result_sales, result_brand, result_test, submit, people, brand, finances, operations, sales;

// Describe this function...
function Start_Section_Logic() {
  verify_count_start = 0;
  if (business_name != null) {
    verify_count_start = (typeof verify_count_start == 'number' ? verify_count_start : 0) + 1;
  }
  if (business_website != null) {
    verify_count_start = (typeof verify_count_start == 'number' ? verify_count_start : 0) + 1;
  }
  if (business_industry != null) {
    verify_count_start = (typeof verify_count_start == 'number' ? verify_count_start : 0) + 1;
  }
  if (business_region != null) {
    verify_count_start = (typeof verify_count_start == 'number' ? verify_count_start : 0) + 1;
  }
  if (business_staff_range != null) {
    verify_count_start = (typeof verify_count_start == 'number' ? verify_count_start : 0) + 1;
  }
  if (business_rev_range != null) {
    verify_count_start = (typeof verify_count_start == 'number' ? verify_count_start : 0) + 1;
  }
  updateValueInInput(verify_count_start,"verify_count_start");
  if ($("[name=verify_count_start]").val() == 6) {

        nextTab = 'strategy';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=strategy]')).attr('prev-tab',we_activeTab);

        $('#step_icon_one').addClass('completed');
  }
  $('#next1').on('click',function() {
    $('#controls1').addClass('hidden');
    $('#controls2').removeClass('hidden');
    $('#step_label_two').addClass('active');
    $('#step_line_one').addClass('active');
    $('#step_icon_two').addClass('active');
  });
}

// Describe this function...
function strategy_yes_logic() {
  verify_count_strategy = (typeof verify_count_strategy == 'number' ? verify_count_strategy : 0) + 1;
  available_strategy = (typeof available_strategy == 'number' ? available_strategy : 0) + 1;
  total_strategy = (typeof total_strategy == 'number' ? total_strategy : 0) + 1;
}

// Describe this function...
function people_yes_logic() {
  verify_count_people = (typeof verify_count_people == 'number' ? verify_count_people : 0) + 1;
  available_people = (typeof available_people == 'number' ? available_people : 0) + 1;
  total_people = (typeof total_people == 'number' ? total_people : 0) + 1;
}

// Describe this function...
function finances_yes_logic() {
  verify_count_finances = (typeof verify_count_finances == 'number' ? verify_count_finances : 0) + 1;
  available_finances = (typeof available_finances == 'number' ? available_finances : 0) + 1;
  total_finances = (typeof total_finances == 'number' ? total_finances : 0) + 1;
}

// Describe this function...
function strategy_no_logic() {
  verify_count_strategy = (typeof verify_count_strategy == 'number' ? verify_count_strategy : 0) + 1;
  available_strategy = (typeof available_strategy == 'number' ? available_strategy : 0) + 1;
  total_strategy = (typeof total_strategy == 'number' ? total_strategy : 0) + 0;
}

// Describe this function...
function operations_yes_logic() {
  verify_count_operations = (typeof verify_count_operations == 'number' ? verify_count_operations : 0) + 1;
  available_operations = (typeof available_operations == 'number' ? available_operations : 0) + 1;
  total_operations = (typeof total_operations == 'number' ? total_operations : 0) + 1;
}

// Describe this function...
function sales_yes_logic() {
  verify_count_sales = (typeof verify_count_sales == 'number' ? verify_count_sales : 0) + 1;
  available_sales = (typeof available_sales == 'number' ? available_sales : 0) + 1;
  total_sales = (typeof total_sales == 'number' ? total_sales : 0) + 1;
}

// Describe this function...
function people_no_logic() {
  verify_count_people = (typeof verify_count_people == 'number' ? verify_count_people : 0) + 1;
  available_people = (typeof available_people == 'number' ? available_people : 0) + 1;
  total_people = (typeof total_people == 'number' ? total_people : 0) + 0;
}

// Describe this function...
function finances__no_logic() {
  verify_count_finances = (typeof verify_count_finances == 'number' ? verify_count_finances : 0) + 1;
  available_finances = (typeof available_finances == 'number' ? available_finances : 0) + 1;
  total_finances = (typeof total_finances == 'number' ? total_finances : 0) + 0;
}

// Describe this function...
function strategy_na_logic() {
  verify_count_strategy = (typeof verify_count_strategy == 'number' ? verify_count_strategy : 0) + 1;
  available_strategy = (typeof available_strategy == 'number' ? available_strategy : 0) + 0;
  total_strategy = (typeof total_strategy == 'number' ? total_strategy : 0) + 0;
}

// Describe this function...
function brand_yes_logic() {
  verify_count_brand = (typeof verify_count_brand == 'number' ? verify_count_brand : 0) + 1;
  available_brand = (typeof available_brand == 'number' ? available_brand : 0) + 1;
  total_brand = (typeof total_brand == 'number' ? total_brand : 0) + 1;
}

// Describe this function...
function operations_no_logic() {
  verify_count_operations = (typeof verify_count_operations == 'number' ? verify_count_operations : 0) + 1;
  available_operations = (typeof available_operations == 'number' ? available_operations : 0) + 1;
  total_operations = (typeof total_operations == 'number' ? total_operations : 0) + 0;
}

// Describe this function...
function sales_no_logic() {
  verify_count_sales = (typeof verify_count_sales == 'number' ? verify_count_sales : 0) + 1;
  available_sales = (typeof available_sales == 'number' ? available_sales : 0) + 1;
  total_sales = (typeof total_sales == 'number' ? total_sales : 0) + 0;
}

// Describe this function...
function people_na_logic() {
  verify_count_people = (typeof verify_count_people == 'number' ? verify_count_people : 0) + 1;
  available_people = (typeof available_people == 'number' ? available_people : 0) + 0;
  total_people = (typeof total_people == 'number' ? total_people : 0) + 0;
}

// Describe this function...
function finances_na_logic() {
  verify_count_finances = (typeof verify_count_finances == 'number' ? verify_count_finances : 0) + 1;
  available_finances = (typeof available_finances == 'number' ? available_finances : 0) + 0;
  total_finances = (typeof total_finances == 'number' ? total_finances : 0) + 0;
}

// Describe this function...
function strategy_section_logic() {
  verify_count_strategy = 0;
  available_strategy = 0;
  total_strategy = 0;
    if (strategy_one == 'YES') {
      strategy_yes_logic();
    } else if (strategy_one == 'NO') {
      strategy_no_logic();
    } else if (strategy_one == 'N/A') {
      strategy_na_logic();
    }
    if (strategy_two == 'YES') {
      strategy_yes_logic();
    } else if (strategy_two == 'NO') {
      strategy_no_logic();
    } else if (strategy_two == 'N/A') {
      strategy_na_logic();
    }
    if (strategy_three == 'YES') {
      strategy_yes_logic();
    } else if (strategy_three == 'NO') {
      strategy_no_logic();
    } else if (strategy_three == 'N/A') {
      strategy_na_logic();
    }
    if (strategy_four == 'YES') {
      strategy_yes_logic();
    } else if (strategy_four == 'NO') {
      strategy_no_logic();
    } else if (strategy_four == 'N/A') {
      strategy_na_logic();
    }
    if (strategy_five == 'YES') {
      strategy_yes_logic();
    } else if (strategy_five == 'NO') {
      strategy_no_logic();
    } else if (strategy_five == 'N/A') {
      strategy_na_logic();
    }
    if (strategy_six == 'YES') {
      strategy_yes_logic();
    } else if (strategy_six == 'NO') {
      strategy_no_logic();
    } else if (strategy_six == 'N/A') {
      strategy_na_logic();
    }
    if (strategy_seven == 'YES') {
      strategy_yes_logic();
    } else if (strategy_seven == 'NO') {
      strategy_no_logic();
    } else if (strategy_seven == 'N/A') {
      strategy_na_logic();
    }
  updateValueInInput(verify_count_strategy,"verify_count_strategy");
  updateValueInInput(available_strategy,"available_strategy");
  $('#available_strategy_text').text(available_strategy);
  updateValueInInput(total_strategy,"total_strategy");
  $('#total_strategy_text').text(total_strategy);
    total_score = total_strategy + total_people + total_finances + total_operations + total_sales + total_brand;
    updateValueInInput(total_score,"total_score");
    $('#total_score_text').text(total_score);
    available_score = available_strategy + available_people + available_finances + available_operations + available_sales + available_brand;
    updateValueInInput(available_score,"available_score");
    $('#available_score_text').text(available_score);
  if ($("[name=verify_count_strategy]").val() == 7) {

        nextTab = 'people';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=people]')).attr('prev-tab',we_activeTab);

        $('#step_icon_two').addClass('completed');
    $('#step_line_one').addClass('completed');
  }
  $('#next2').on('click',function() {
    $('#controls2').addClass('hidden');
    $('#controls3').removeClass('hidden');
    $('#step_label_three').addClass('active');
    $('#step_line_two').addClass('active');
    $('#step_line_one').addClass('completed');
    $('#step_icon_three').addClass('active');
  });
  $('#prev2').on('click',function() {
    $('#controls2').addClass('hidden');
    $('#controls1').removeClass('hidden');
  });
}

// Describe this function...
function brand_no_logic() {
  verify_count_brand = (typeof verify_count_brand == 'number' ? verify_count_brand : 0) + 1;
  available_brand = (typeof available_brand == 'number' ? available_brand : 0) + 1;
  total_brand = (typeof total_brand == 'number' ? total_brand : 0) + 0;
}

// Describe this function...
function operations_na_logic() {
  verify_count_operations = (typeof verify_count_operations == 'number' ? verify_count_operations : 0) + 1;
  available_operations = (typeof available_operations == 'number' ? available_operations : 0) + 0;
  total_operations = (typeof total_operations == 'number' ? total_operations : 0) + 0;
}

// Describe this function...
function sales__na_logic() {
  verify_count_sales = (typeof verify_count_sales == 'number' ? verify_count_sales : 0) + 1;
  available_sales = (typeof available_sales == 'number' ? available_sales : 0) + 0;
  total_sales = (typeof total_sales == 'number' ? total_sales : 0) + 0;
}

// Describe this function...
function people_section_logic() {
  verify_count_people = 0;
  available_people = 0;
  total_people = 0;
    if (people_one == 'YES') {
      people_yes_logic();
    } else if (people_one == 'NO') {
      people_no_logic();
    } else if (people_one == 'N/A') {
      people_na_logic();
    }
    if (people_two == 'YES') {
      people_yes_logic();
    } else if (people_two == 'NO') {
      people_no_logic();
    } else if (people_two == 'N/A') {
      people_na_logic();
    }
    if (people_three == 'YES') {
      people_yes_logic();
    } else if (people_three == 'NO') {
      people_no_logic();
    } else if (people_three == 'N/A') {
      people_na_logic();
    }
    if (people_four == 'YES') {
      people_yes_logic();
    } else if (people_four == 'NO') {
      people_no_logic();
    } else if (people_four == 'N/A') {
      people_na_logic();
    }
    if (people_five == 'YES') {
      people_yes_logic();
    } else if (people_five == 'NO') {
      people_no_logic();
    } else if (people_five == 'N/A') {
      people_na_logic();
    }
    if (people_six == 'YES') {
      people_yes_logic();
    } else if (people_six == 'NO') {
      people_no_logic();
    } else if (people_six == 'N/A') {
      people_na_logic();
    }
    if (people_seven == 'YES') {
      people_yes_logic();
    } else if (people_seven == 'NO') {
      people_no_logic();
    } else if (people_seven == 'N/A') {
      people_na_logic();
    }
    if (people_eight == 'YES') {
      people_yes_logic();
    } else if (people_eight == 'NO') {
      people_no_logic();
    } else if (people_eight == 'N/A') {
      people_na_logic();
    }
    if (people_nine == 'YES') {
      people_yes_logic();
    } else if (people_nine == 'NO') {
      people_no_logic();
    } else if (people_nine == 'N/A') {
      people_na_logic();
    }
  updateValueInInput(verify_count_people,"verify_count_people");
  updateValueInInput(available_people,"available_people");
  $('#available_people_text').text(available_people);
  updateValueInInput(total_people,"total_people");
  $('#total_people_text').text(total_people);
    total_score = total_strategy + total_people + total_finances + total_operations + total_sales + total_brand;
    updateValueInInput(total_score,"total_score");
    $('#total_score_text').text(total_score);
    available_score = available_strategy + available_people + available_finances + available_operations + available_sales + available_brand;
    updateValueInInput(available_score,"available_score");
    $('#available_score_text').text(available_score);
  if ($("[name=verify_count_people]").val() == 9) {

        nextTab = 'finances';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=finances]')).attr('prev-tab',we_activeTab);

        $('#step_icon_three').addClass('completed');
    $('#step_line_two').addClass('completed');
  }
  $('#next3').on('click',function() {
    $('#controls3').addClass('hidden');
    $('#controls4').removeClass('hidden');
    $('#step_label_four').addClass('active');
    $('#step_line_three').addClass('active');
    $('#step_line_two').addClass('completed');
    $('#step_icon_four').addClass('active');
  });
  $('#prev3').on('click',function() {
    $('#controls3').addClass('hidden');
    $('#controls2').removeClass('hidden');
  });
}

// Describe this function...
function finances_section_logic() {
  verify_count_finances = 0;
  available_finances = 0;
  total_finances = 0;
    if (finances_one == 'YES') {
      finances_yes_logic();
    } else if (finances_one == 'NO') {
      finances__no_logic();
    } else if (finances_one == 'N/A') {
      finances_na_logic();
    }
    if (finances_two == 'YES') {
      finances_yes_logic();
    } else if (finances_two == 'NO') {
      finances__no_logic();
    } else if (finances_two == 'N/A') {
      finances_na_logic();
    }
    if (finances_three == 'YES') {
      finances_yes_logic();
    } else if (finances_three == 'NO') {
      finances__no_logic();
    } else if (finances_three == 'N/A') {
      finances_na_logic();
    }
    if (finances_four == 'YES') {
      finances_yes_logic();
    } else if (finances_four == 'NO') {
      finances__no_logic();
    } else if (finances_four == 'N/A') {
      finances_na_logic();
    }
    if (finances_five == 'YES') {
      finances_yes_logic();
    } else if (finances_five == 'NO') {
      finances__no_logic();
    } else if (finances_five == 'N/A') {
      finances_na_logic();
    }
    if (finances_six == 'YES') {
      finances_yes_logic();
    } else if (finances_six == 'NO') {
      finances__no_logic();
    } else if (finances_six == 'N/A') {
      finances_na_logic();
    }
    if (finances_seven == 'YES') {
      finances_yes_logic();
    } else if (finances_seven == 'NO') {
      finances__no_logic();
    } else if (finances_seven == 'N/A') {
      finances_na_logic();
    }
    if (finances_eight == 'YES') {
      finances_yes_logic();
    } else if (finances_eight == 'NO') {
      finances__no_logic();
    } else if (finances_eight == 'N/A') {
      finances_na_logic();
    }
    if (finances_nine == 'YES') {
      finances_yes_logic();
    } else if (finances_nine == 'NO') {
      finances__no_logic();
    } else if (finances_nine == 'N/A') {
      finances_na_logic();
    }
  updateValueInInput(verify_count_finances,"verify_count_finances");
  updateValueInInput(available_finances,"available_finances");
  $('#available_finances_text').text(available_finances);
  updateValueInInput(total_finances,"total_finances");
  $('#total_finances_text').text(total_finances);
    total_score = total_strategy + total_people + total_finances + total_operations + total_sales + total_brand;
    updateValueInInput(total_score,"total_score");
    $('#total_score_text').text(total_score);
    available_score = available_strategy + available_people + available_finances + available_operations + available_sales + available_brand;
    updateValueInInput(available_score,"available_score");
    $('#available_score_text').text(available_score);
  if ($("[name=verify_count_finances]").val() == 9) {

        nextTab = 'operations';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=operations]')).attr('prev-tab',we_activeTab);

        $('#step_icon_four').addClass('completed');
    $('#step_line_three').addClass('completed');
  }
  $('#next4').on('click',function() {
    $('#controls4').addClass('hidden');
    $('#controls5').removeClass('hidden');
    $('#step_label_five').addClass('active');
    $('#step_line_four').addClass('active');
    $('#step_line_three').addClass('completed');
    $('#step_icon_five').addClass('active');
  });
  $('#prev4').on('click',function() {
    $('#controls4').addClass('hidden');
    $('#controls3').removeClass('hidden');
  });
}

// Describe this function...
function brand_na_logic() {
  verify_count_brand = (typeof verify_count_brand == 'number' ? verify_count_brand : 0) + 1;
  available_brand = (typeof available_brand == 'number' ? available_brand : 0) + 0;
  total_brand = (typeof total_brand == 'number' ? total_brand : 0) + 0;
}

// Describe this function...
function operations_section_logic() {
  verify_count_operations = 0;
  available_operations = 0;
  total_operations = 0;
    if (operations_one == 'YES') {
      operations_yes_logic();
    } else if (operations_one == 'NO') {
      operations_no_logic();
    } else if (operations_one == 'N/A') {
      operations_na_logic();
    }
    if (operations_two == 'YES') {
      operations_yes_logic();
    } else if (operations_two == 'NO') {
      operations_no_logic();
    } else if (operations_two == 'N/A') {
      operations_na_logic();
    }
    if (operations_three == 'YES') {
      operations_yes_logic();
    } else if (operations_three == 'NO') {
      operations_no_logic();
    } else if (operations_three == 'N/A') {
      operations_na_logic();
    }
    if (operations_four == 'YES') {
      operations_yes_logic();
    } else if (operations_four == 'NO') {
      operations_no_logic();
    } else if (operations_four == 'N/A') {
      operations_na_logic();
    }
    if (operations_five == 'YES') {
      operations_yes_logic();
    } else if (operations_five == 'NO') {
      operations_no_logic();
    } else if (operations_five == 'N/A') {
      operations_na_logic();
    }
    if (operations_six == 'YES') {
      operations_yes_logic();
    } else if (operations_six == 'NO') {
      operations_no_logic();
    } else if (operations_six == 'N/A') {
      operations_na_logic();
    }
    if (operations_seven == 'YES') {
      operations_yes_logic();
    } else if (operations_seven == 'NO') {
      operations_no_logic();
    } else if (operations_seven == 'N/A') {
      operations_na_logic();
    }
    if (operations_eight == 'YES') {
      operations_yes_logic();
    } else if (operations_eight == 'NO') {
      operations_no_logic();
    } else if (operations_eight == 'N/A') {
      operations_na_logic();
    }
    if (operations_nine == 'YES') {
      operations_yes_logic();
    } else if (operations_nine == 'NO') {
      operations_no_logic();
    } else if (operations_nine == 'N/A') {
      operations_na_logic();
    }
    if (operations_ten == 'YES') {
      operations_yes_logic();
    } else if (operations_ten == 'NO') {
      operations_no_logic();
    } else if (operations_ten == 'N/A') {
      operations_na_logic();
    }
  updateValueInInput(verify_count_operations,"verify_count_operations");
  updateValueInInput(available_operations,"available_operations");
  $('#available_operations_text').text(available_operations);
  updateValueInInput(total_operations,"total_operations");
  $('#total_operations_text').text(total_operations);
    total_score = total_strategy + total_people + total_finances + total_operations + total_sales + total_brand;
    updateValueInInput(total_score,"total_score");
    $('#total_score_text').text(total_score);
    available_score = available_strategy + available_people + available_finances + available_operations + available_sales + available_brand;
    updateValueInInput(available_score,"available_score");
    $('#available_score_text').text(available_score);
  if ($("[name=verify_count_operations]").val() == 10) {

        nextTab = 'sales';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=sales]')).attr('prev-tab',we_activeTab);

        $('#step_icon_five').addClass('completed');
    $('#step_line_four').addClass('completed');
  }
  $('#next5').on('click',function() {
    $('#controls5').addClass('hidden');
    $('#controls6').removeClass('hidden');
    $('#step_label_six').addClass('active');
    $('#step_line_five').addClass('active');
    $('#step_line_four').addClass('completed');
    $('#step_icon_six').addClass('active');
  });
  $('#prev5').on('click',function() {
    $('#controls5').addClass('hidden');
    $('#controls4').removeClass('hidden');
  });
}

// Describe this function...
function sales_section_logic() {
  verify_count_sales = 0;
  available_sales = 0;
  total_sales = 0;
    if (sales_one == 'YES') {
      sales_yes_logic();
    } else if (sales_one == 'NO') {
      sales_no_logic();
    } else if (sales_one == 'N/A') {
      sales__na_logic();
    }
    if (sales_two == 'YES') {
      sales_yes_logic();
    } else if (sales_two == 'NO') {
      sales_no_logic();
    } else if (sales_two == 'N/A') {
      sales__na_logic();
    }
    if (sales_three == 'YES') {
      sales_yes_logic();
    } else if (sales_three == 'NO') {
      sales_no_logic();
    } else if (sales_three == 'N/A') {
      sales__na_logic();
    }
    if (sales_four == 'YES') {
      sales_yes_logic();
    } else if (sales_four == 'NO') {
      sales_no_logic();
    } else if (sales_four == 'N/A') {
      sales__na_logic();
    }
    if (sales_five == 'YES') {
      sales_yes_logic();
    } else if (sales_five == 'NO') {
      sales_no_logic();
    } else if (sales_five == 'N/A') {
      sales__na_logic();
    }
    if (sales_six == 'YES') {
      sales_yes_logic();
    } else if (sales_six == 'NO') {
      sales_no_logic();
    } else if (sales_six == 'N/A') {
      sales__na_logic();
    }
    if (sales_seven == 'YES') {
      sales_yes_logic();
    } else if (sales_seven == 'NO') {
      sales_no_logic();
    } else if (sales_seven == 'N/A') {
      sales__na_logic();
    }
  updateValueInInput(verify_count_sales,"verify_count_sales");
  updateValueInInput(available_sales,"available_sales");
  $('#available_sales_text').text(available_sales);
  updateValueInInput(total_sales,"total_sales");
  $('#total_sales_text').text(total_sales);
    total_score = total_strategy + total_people + total_finances + total_operations + total_sales + total_brand;
    updateValueInInput(total_score,"total_score");
    $('#total_score_text').text(total_score);
    available_score = available_strategy + available_people + available_finances + available_operations + available_sales + available_brand;
    updateValueInInput(available_score,"available_score");
    $('#available_score_text').text(available_score);
  if ($("[name=verify_count_sales]").val() == 7) {

        nextTab = 'brand';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=brand]')).attr('prev-tab',we_activeTab);

        $('#step_icon_six').addClass('completed');
    $('#step_line_five').addClass('completed');
  }
  $('#next6').on('click',function() {
    $('#controls6').addClass('hidden');
    $('#controls7').removeClass('hidden');
    $('#step_label_seven').addClass('active');
    $('#step_line_six').addClass('active');
    $('#step_line_five').addClass('completed');
    $('#step_icon_seven').addClass('active');
  });
  $('#prev6').on('click',function() {
    $('#controls6').addClass('hidden');
    $('#controls5').removeClass('hidden');
  });
}

// Describe this function...
function brand_section_logic() {
  verify_count_brand = 0;
  available_brand = 0;
  total_brand = 0;
    if (brand_one == 'YES') {
      brand_yes_logic();
    } else if (brand_one == 'NO') {
      brand_no_logic();
    } else if (brand_one == 'N/A') {
      brand_na_logic();
    }
    if (brand_two == 'YES') {
      brand_yes_logic();
    } else if (brand_two == 'NO') {
      brand_no_logic();
    } else if (brand_two == 'N/A') {
      brand_na_logic();
    }
    if (brand_three == 'YES') {
      brand_yes_logic();
    } else if (brand_three == 'NO') {
      brand_no_logic();
    } else if (brand_three == 'N/A') {
      brand_na_logic();
    }
    if (brand_four == 'YES') {
      brand_yes_logic();
    } else if (brand_four == 'NO') {
      brand_no_logic();
    } else if (brand_four == 'N/A') {
      brand_na_logic();
    }
    if (brand_five == 'YES') {
      brand_yes_logic();
    } else if (brand_five == 'NO') {
      brand_no_logic();
    } else if (brand_five == 'N/A') {
      brand_na_logic();
    }
    if (brand_six == 'YES') {
      brand_yes_logic();
    } else if (brand_six == 'NO') {
      brand_no_logic();
    } else if (brand_six == 'N/A') {
      brand_na_logic();
    }
  updateValueInInput(verify_count_brand,"verify_count_brand");
  updateValueInInput(available_brand,"available_brand");
  $('#available_brand_text').text(available_brand);
  updateValueInInput(total_brand,"total_brand");
  $('#total_brand_text').text(total_brand);
    total_score = total_strategy + total_people + total_finances + total_operations + total_sales + total_brand;
    updateValueInInput(total_score,"total_score");
    $('#total_score_text').text(total_score);
    available_score = available_strategy + available_people + available_finances + available_operations + available_sales + available_brand;
    updateValueInInput(available_score,"available_score");
    $('#available_score_text').text(available_score);
  if ($("[name=verify_count_brand]").val() == 6) {

        nextTab = 'submit';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=submit]')).attr('prev-tab',we_activeTab);

        $('#step_icon_seven').addClass('completed');
    $('#step_line_six').addClass('completed');
  }
  $('#next7').on('click',function() {
    $('#controls7').addClass('hidden');
    $('#controls8').removeClass('hidden');
    $('#step_label_eight').addClass('active');
    $('#step_line_seven').addClass('active');
    $('#step_line_six').addClass('completed');
    $('#step_icon_eight').addClass('active');
    $('#next-section').addClass('hidden');
    $('#submit-assessment').removeClass('hidden');
  });
  $('#prev7').on('click',function() {
    $('#controls7').addClass('hidden');
    $('#controls6').removeClass('hidden');
  });
}

// Describe this function...
function Submit_Section_Logic() {
  verify_count_submit = 0;
  if (contact_name != null) {
    verify_count_submit = (typeof verify_count_submit == 'number' ? verify_count_submit : 0) + 1;
  }
  if (contact_job_title != null) {
    verify_count_submit = (typeof verify_count_submit == 'number' ? verify_count_submit : 0) + 1;
  }
  if (contact_email != null) {
    verify_count_submit = (typeof verify_count_submit == 'number' ? verify_count_submit : 0) + 1;
  }
  if (accept_terms != null) {
    verify_count_submit = (typeof verify_count_submit == 'number' ? verify_count_submit : 0) + 1;
  }
  updateValueInInput(verify_count_submit,"verify_count_submit");
  if ($("[name=verify_count_submit]").val() == 4) {
    $('#submit-assessment-8').addClass('active');
    $('#step_icon_eight').addClass('completed');
    $('#step_line_seven').addClass('completed');
  }
  $('#prev8').on('click',function() {
    $('#controls8').addClass('hidden');
    $('#controls7').removeClass('hidden');
  });
}


var we_tabs_next_button = '[bloc=next-section]';
    var we_tabs_prev_button = '[bloc=prev-section]';
    var we_tabs_active_class = 'active';

    var we_activeTab,we_indexOfActiveTab, we_indexOfNextTab, we_indexOfPrevTab, we_prevTab, we_amountOfTabs, nextTab;

    var tabList = ['start'];

    openTab(tabList[0]);

    $(we_tabs_next_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfNextTab = indexOfActiveTab + 1;
      var nextTab = tabList[indexOfNextTab];
      var amountOfTabs = tabList.length;
      var attrNextTab = $('.w--tab-active').attr('next-tab');

      openTab(attrNextTab);

      attrNextTab = $('.w--tab-active').attr('next-tab');

      if (typeof attrNextTab !== 'undefined' && attrNextTab !== false) {
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      } else {
        $(we_tabs_next_button).removeClass(we_tabs_active_class);
      }

      if (amountOfTabs > 1) {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    $(we_tabs_prev_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfPrevTab = indexOfActiveTab - 1;
      var prevTab = tabList[indexOfPrevTab];

      var attrPrevTab = $('.w--tab-active').attr('prev-tab');

      if (indexOfActiveTab > 0) {
        openTab(attrPrevTab);
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      }

      if (indexOfActiveTab <= 1) {
        $(we_tabs_prev_button).removeClass(we_tabs_active_class);
      } else {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    function openTab(tab) {
      var tab_link = "a[data-w-tab=" + tab;
      tab = "div[data-w-tab=" + tab;

      $(tab).siblings().removeClass("w--tab-active");
      $(tab).addClass("w--tab-active");
      $(tab_link).siblings("a").removeClass("w--current");
      $(tab_link).addClass("w--current");
    }  available_score = 0;
  total_score = 0;
  available_strategy = 0;
  total_strategy = 0;
  available_people = 0;
  total_people = 0;
  available_finances = 0;
  total_finances = 0;
  available_operations = 0;
  total_operations = 0;
  available_sales = 0;
  total_sales = 0;
  available_brand = 0;
  total_brand = 0;
  $('#prev8').on('click',function() {
    $('#controls8').addClass('hidden');
    $('#controls7').removeClass('hidden');
  });
  $("[name=business_name]").on("input", function () {
      business_name = getValueFromInput("business_name");
        Start_Section_Logic();
  });

      $("[name=business_name]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        business_name = getValueFromInput("business_name");
          Start_Section_Logic();
  });
      $("[name=business_website]").on("input", function () {
      business_website = getValueFromInput("business_website");
        Start_Section_Logic();
  });

      $("[name=business_website]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        business_website = getValueFromInput("business_website");
          Start_Section_Logic();
  });
      $("[name=business_industry]").on("input", function () {
      business_industry = getValueFromInput("business_industry");
        Start_Section_Logic();
  });

      $("[name=business_industry]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        business_industry = getValueFromInput("business_industry");
          Start_Section_Logic();
  });
      $("[name=business_region]").on("input", function () {
      business_region = getValueFromInput("business_region");
        Start_Section_Logic();
  });

      $("[name=business_region]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        business_region = getValueFromInput("business_region");
          Start_Section_Logic();
  });
      $("[name=business_staff_range]").on("input", function () {
      business_staff_range = getValueFromInput("business_staff_range");
        Start_Section_Logic();
  });

      $("[name=business_staff_range]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        business_staff_range = getValueFromInput("business_staff_range");
          Start_Section_Logic();
  });
      $("[name=business_rev_range]").on("input", function () {
      business_rev_range = getValueFromInput("business_rev_range");
        Start_Section_Logic();
  });

      $("[name=business_rev_range]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        business_rev_range = getValueFromInput("business_rev_range");
          Start_Section_Logic();
  });
        $("[name=strategy_one]").on("input", function () {
      strategy_one = getValueFromInput("strategy_one");
        strategy_section_logic();
  });

      $("[name=strategy_one]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        strategy_one = getValueFromInput("strategy_one");
          strategy_section_logic();
  });
      $("[name=strategy_two]").on("input", function () {
      strategy_two = getValueFromInput("strategy_two");
        strategy_section_logic();
  });

      $("[name=strategy_two]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        strategy_two = getValueFromInput("strategy_two");
          strategy_section_logic();
  });
      $("[name=strategy_three]").on("input", function () {
      strategy_three = getValueFromInput("strategy_three");
        strategy_section_logic();
  });

      $("[name=strategy_three]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        strategy_three = getValueFromInput("strategy_three");
          strategy_section_logic();
  });
      $("[name=strategy_four]").on("input", function () {
      strategy_four = getValueFromInput("strategy_four");
        strategy_section_logic();
  });

      $("[name=strategy_four]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        strategy_four = getValueFromInput("strategy_four");
          strategy_section_logic();
  });
      $("[name=strategy_five]").on("input", function () {
      strategy_five = getValueFromInput("strategy_five");
        strategy_section_logic();
  });

      $("[name=strategy_five]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        strategy_five = getValueFromInput("strategy_five");
          strategy_section_logic();
  });
      $("[name=strategy_six]").on("input", function () {
      strategy_six = getValueFromInput("strategy_six");
        strategy_section_logic();
  });

      $("[name=strategy_six]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        strategy_six = getValueFromInput("strategy_six");
          strategy_section_logic();
  });
      $("[name=strategy_seven]").on("input", function () {
      strategy_seven = getValueFromInput("strategy_seven");
        strategy_section_logic();
  });

      $("[name=strategy_seven]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        strategy_seven = getValueFromInput("strategy_seven");
          strategy_section_logic();
  });
        $("[name=people_one]").on("input", function () {
      people_one = getValueFromInput("people_one");
        people_section_logic();
  });

      $("[name=people_one]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        people_one = getValueFromInput("people_one");
          people_section_logic();
  });
      $("[name=people_two]").on("input", function () {
      people_two = getValueFromInput("people_two");
        people_section_logic();
  });

      $("[name=people_two]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        people_two = getValueFromInput("people_two");
          people_section_logic();
  });
      $("[name=people_three]").on("input", function () {
      people_three = getValueFromInput("people_three");
        people_section_logic();
  });

      $("[name=people_three]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        people_three = getValueFromInput("people_three");
          people_section_logic();
  });
      $("[name=people_four]").on("input", function () {
      people_four = getValueFromInput("people_four");
        people_section_logic();
  });

      $("[name=people_four]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        people_four = getValueFromInput("people_four");
          people_section_logic();
  });
      $("[name=people_five]").on("input", function () {
      people_five = getValueFromInput("people_five");
        people_section_logic();
  });

      $("[name=people_five]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        people_five = getValueFromInput("people_five");
          people_section_logic();
  });
      $("[name=people_six]").on("input", function () {
      people_six = getValueFromInput("people_six");
        people_section_logic();
  });

      $("[name=people_six]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        people_six = getValueFromInput("people_six");
          people_section_logic();
  });
      $("[name=people_seven]").on("input", function () {
      people_seven = getValueFromInput("people_seven");
        people_section_logic();
  });

      $("[name=people_seven]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        people_seven = getValueFromInput("people_seven");
          people_section_logic();
  });
      $("[name=people_eight]").on("input", function () {
      people_eight = getValueFromInput("people_eight");
        people_section_logic();
  });

      $("[name=people_eight]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        people_eight = getValueFromInput("people_eight");
          people_section_logic();
  });
      $("[name=people_nine]").on("input", function () {
      people_nine = getValueFromInput("people_nine");
        people_section_logic();
  });

      $("[name=people_nine]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        people_nine = getValueFromInput("people_nine");
          people_section_logic();
  });
        $("[name=finances_one]").on("input", function () {
      finances_one = getValueFromInput("finances_one");
        finances_section_logic();
  });

      $("[name=finances_one]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        finances_one = getValueFromInput("finances_one");
          finances_section_logic();
  });
      $("[name=finances_two]").on("input", function () {
      finances_two = getValueFromInput("finances_two");
        finances_section_logic();
  });

      $("[name=finances_two]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        finances_two = getValueFromInput("finances_two");
          finances_section_logic();
  });
      $("[name=finances_three]").on("input", function () {
      finances_three = getValueFromInput("finances_three");
        finances_section_logic();
  });

      $("[name=finances_three]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        finances_three = getValueFromInput("finances_three");
          finances_section_logic();
  });
      $("[name=finances_four]").on("input", function () {
      finances_four = getValueFromInput("finances_four");
        finances_section_logic();
  });

      $("[name=finances_four]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        finances_four = getValueFromInput("finances_four");
          finances_section_logic();
  });
      $("[name=finances_five]").on("input", function () {
      finances_five = getValueFromInput("finances_five");
        finances_section_logic();
  });

      $("[name=finances_five]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        finances_five = getValueFromInput("finances_five");
          finances_section_logic();
  });
      $("[name=finances_six]").on("input", function () {
      finances_six = getValueFromInput("finances_six");
        finances_section_logic();
  });

      $("[name=finances_six]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        finances_six = getValueFromInput("finances_six");
          finances_section_logic();
  });
      $("[name=finances_seven]").on("input", function () {
      finances_seven = getValueFromInput("finances_seven");
        finances_section_logic();
  });

      $("[name=finances_seven]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        finances_seven = getValueFromInput("finances_seven");
          finances_section_logic();
  });
      $("[name=finances_eight]").on("input", function () {
      finances_eight = getValueFromInput("finances_eight");
        finances_section_logic();
  });

      $("[name=finances_eight]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        finances_eight = getValueFromInput("finances_eight");
          finances_section_logic();
  });
      $("[name=finances_nine]").on("input", function () {
      finances_nine = getValueFromInput("finances_nine");
        finances_section_logic();
  });

      $("[name=finances_nine]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        finances_nine = getValueFromInput("finances_nine");
          finances_section_logic();
  });
        $("[name=operations_one]").on("input", function () {
      operations_one = getValueFromInput("operations_one");
        operations_section_logic();
  });

      $("[name=operations_one]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        operations_one = getValueFromInput("operations_one");
          operations_section_logic();
  });
      $("[name=operations_two]").on("input", function () {
      operations_two = getValueFromInput("operations_two");
        operations_section_logic();
  });

      $("[name=operations_two]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        operations_two = getValueFromInput("operations_two");
          operations_section_logic();
  });
      $("[name=operations_three]").on("input", function () {
      operations_three = getValueFromInput("operations_three");
        operations_section_logic();
  });

      $("[name=operations_three]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        operations_three = getValueFromInput("operations_three");
          operations_section_logic();
  });
      $("[name=operations_four]").on("input", function () {
      operations_four = getValueFromInput("operations_four");
        operations_section_logic();
  });

      $("[name=operations_four]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        operations_four = getValueFromInput("operations_four");
          operations_section_logic();
  });
      $("[name=operations_five]").on("input", function () {
      operations_five = getValueFromInput("operations_five");
        operations_section_logic();
  });

      $("[name=operations_five]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        operations_five = getValueFromInput("operations_five");
          operations_section_logic();
  });
      $("[name=operations_six]").on("input", function () {
      operations_six = getValueFromInput("operations_six");
        operations_section_logic();
  });

      $("[name=operations_six]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        operations_six = getValueFromInput("operations_six");
          operations_section_logic();
  });
      $("[name=operations_seven]").on("input", function () {
      operations_seven = getValueFromInput("operations_seven");
        operations_section_logic();
  });

      $("[name=operations_seven]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        operations_seven = getValueFromInput("operations_seven");
          operations_section_logic();
  });
      $("[name=operations_eight]").on("input", function () {
      operations_eight = getValueFromInput("operations_eight");
        operations_section_logic();
  });

      $("[name=operations_eight]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        operations_eight = getValueFromInput("operations_eight");
          operations_section_logic();
  });
      $("[name=operations_nine]").on("input", function () {
      operations_nine = getValueFromInput("operations_nine");
        operations_section_logic();
  });

      $("[name=operations_nine]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        operations_nine = getValueFromInput("operations_nine");
          operations_section_logic();
  });
      $("[name=operations_ten]").on("input", function () {
      operations_ten = getValueFromInput("operations_ten");
        operations_section_logic();
  });

      $("[name=operations_ten]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        operations_ten = getValueFromInput("operations_ten");
          operations_section_logic();
  });
        $("[name=sales_one]").on("input", function () {
      sales_one = getValueFromInput("sales_one");
        sales_section_logic();
  });

      $("[name=sales_one]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        sales_one = getValueFromInput("sales_one");
          sales_section_logic();
  });
      $("[name=sales_two]").on("input", function () {
      sales_two = getValueFromInput("sales_two");
        sales_section_logic();
  });

      $("[name=sales_two]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        sales_two = getValueFromInput("sales_two");
          sales_section_logic();
  });
      $("[name=sales_three]").on("input", function () {
      sales_three = getValueFromInput("sales_three");
        sales_section_logic();
  });

      $("[name=sales_three]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        sales_three = getValueFromInput("sales_three");
          sales_section_logic();
  });
      $("[name=sales_four]").on("input", function () {
      sales_four = getValueFromInput("sales_four");
        sales_section_logic();
  });

      $("[name=sales_four]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        sales_four = getValueFromInput("sales_four");
          sales_section_logic();
  });
      $("[name=sales_five]").on("input", function () {
      sales_five = getValueFromInput("sales_five");
        sales_section_logic();
  });

      $("[name=sales_five]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        sales_five = getValueFromInput("sales_five");
          sales_section_logic();
  });
      $("[name=sales_six]").on("input", function () {
      sales_six = getValueFromInput("sales_six");
        sales_section_logic();
  });

      $("[name=sales_six]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        sales_six = getValueFromInput("sales_six");
          sales_section_logic();
  });
      $("[name=sales_seven]").on("input", function () {
      sales_seven = getValueFromInput("sales_seven");
        sales_section_logic();
  });

      $("[name=sales_seven]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        sales_seven = getValueFromInput("sales_seven");
          sales_section_logic();
  });
        $("[name=brand_one]").on("input", function () {
      brand_one = getValueFromInput("brand_one");
        brand_section_logic();
  });

      $("[name=brand_one]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        brand_one = getValueFromInput("brand_one");
          brand_section_logic();
  });
      $("[name=brand_two]").on("input", function () {
      brand_two = getValueFromInput("brand_two");
        brand_section_logic();
  });

      $("[name=brand_two]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        brand_two = getValueFromInput("brand_two");
          brand_section_logic();
  });
      $("[name=brand_three]").on("input", function () {
      brand_three = getValueFromInput("brand_three");
        brand_section_logic();
  });

      $("[name=brand_three]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        brand_three = getValueFromInput("brand_three");
          brand_section_logic();
  });
      $("[name=brand_four]").on("input", function () {
      brand_four = getValueFromInput("brand_four");
        brand_section_logic();
  });

      $("[name=brand_four]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        brand_four = getValueFromInput("brand_four");
          brand_section_logic();
  });
      $("[name=brand_five]").on("input", function () {
      brand_five = getValueFromInput("brand_five");
        brand_section_logic();
  });

      $("[name=brand_five]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        brand_five = getValueFromInput("brand_five");
          brand_section_logic();
  });
      $("[name=brand_six]").on("input", function () {
      brand_six = getValueFromInput("brand_six");
        brand_section_logic();
  });

      $("[name=brand_six]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        brand_six = getValueFromInput("brand_six");
          brand_section_logic();
  });
      $('#prev-section').on('click',function() {
  $('#submit-assessment').addClass('hidden');
  $('#next-section').removeClass('hidden');
});
$('[bloc=next-section]').on('click',function() {
  if (available_strategy == total_strategy) {
    updateValueInInput('PASS',"result_strategy");
    $('#result_strategy_text').text('PASS');
    $('#result_strategy_text').addClass('pass');
  } else if (available_strategy > total_strategy) {
    updateValueInInput('GROW',"result_strategy");
    $('#result_strategy_text').text('GROW');
    $('#result_strategy_text').removeClass('pass');
  }
  if (available_people == total_people) {
    updateValueInInput('PASS',"result_people");
    $('#result_people_text').text('PASS');
    $('#result_people_text').addClass('pass');
  } else if (available_people > total_people) {
    updateValueInInput('GROW',"result_people");
    $('#result_people_text').text('GROW');
    $('#result_people_text').removeClass('pass');
  }
  if (available_finances == total_finances) {
    updateValueInInput('PASS',"result_finances");
    $('#result_finances_text').text('PASS');
    $('#result_finances_text').addClass('pass');
  } else if (available_finances > total_finances) {
    updateValueInInput('GROW',"result_finances");
    $('#result_finances_text').text('GROW');
    $('#result_finances_text').removeClass('pass');
  }
  if (available_operations == total_operations) {
    updateValueInInput('PASS',"result_operations");
    $('#result_operations_text').text('PASS');
    $('#result_operations_text').addClass('pass');
  } else if (available_operations > total_operations) {
    updateValueInInput('GROW',"result_operations");
    $('#result_operations_text').text('GROW');
    $('#result_operations_text').removeClass('pass');
  }
  if (available_sales == total_sales) {
    updateValueInInput('PASS',"result_sales");
    $('#result_sales_text').text('PASS');
    $('#result_sales_text').addClass('pass');
  } else if (available_sales > total_sales) {
    updateValueInInput('GROW',"result_sales");
    $('#result_sales_text').text('GROW');
    $('#result_sales_text').removeClass('pass');
  }
  if (available_brand == total_brand) {
    updateValueInInput('PASS',"result_brand");
    $('#result_brand_text').text('PASS');
    $('#result_brand_text').addClass('pass');
  } else if (available_brand > total_brand) {
    updateValueInInput('GROW',"result_brand");
    $('#result_brand_text').text('GROW');
    $('#result_brand_text').removeClass('pass');
  }
  if (available_score == total_score) {
    updateValueInInput('PASS',"result_test");
    $('#result_test_text').text('PASS');
    $('#result_test_text').addClass('pass');
  } else if (available_score > total_score) {
    updateValueInInput('GROW',"result_test");
    $('#result_test_text').text('GROW');
    $('#result_test_text').removeClass('pass');
  }
});
  $("[name=contact_name]").on("input", function () {
      contact_name = getValueFromInput("contact_name");
        Submit_Section_Logic();
  });

      $("[name=contact_name]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        contact_name = getValueFromInput("contact_name");
          Submit_Section_Logic();
  });
      $("[name=contact_job_title]").on("input", function () {
      contact_job_title = getValueFromInput("contact_job_title");
        Submit_Section_Logic();
  });

      $("[name=contact_job_title]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        contact_job_title = getValueFromInput("contact_job_title");
          Submit_Section_Logic();
  });
      $("[name=contact_email]").on("input", function () {
      contact_email = getValueFromInput("contact_email");
        Submit_Section_Logic();
  });

      $("[name=contact_email]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        contact_email = getValueFromInput("contact_email");
          Submit_Section_Logic();
  });
      $("[name=contact_phone]").on("input", function () {
      contact_phone = getValueFromInput("contact_phone");
        Submit_Section_Logic();
  });

      $("[name=contact_phone]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        contact_phone = getValueFromInput("contact_phone");
          Submit_Section_Logic();
  });
      $("[name=accept_terms]").on("input", function () {
      accept_terms = getValueFromInput("accept_terms");
        Submit_Section_Logic();
  });

      $("[name=accept_terms]").parent("label.w-radio").on("click", function () {
        clickedRadioButtonValue = $("input", this).val();
        accept_terms = getValueFromInput("accept_terms");
          Submit_Section_Logic();
  });