define([
    "./pages/elements/elements-controller",
    "./pages/forms/forms-controller",
    "./pages/home/home-controller",
    "./pages/pages/pages-controller",
    "./pages/widgets/widgets-controller"
], function(
    ElementsController,
    FormsController,
    HomeController,
    PagesController,
    WidgetsController
) {

    var routes = [
        { url: "/", label: "Home", icon: "fa fa-home", templateUrl: "./pages/home/home.html", controller: HomeController.getName() },
        { url: "/widgets", label: "Widgets", icon: "fa fa-th-large", templateUrl: "./pages/widgets/widgets.html", controller: WidgetsController.getName() },
        { label: "Elements", icon: "fa fa-cube", childRoutes: [
            {url: "/elements/buttons", label: "Buttons", templateUrl: "./pages/elements/buttons.html", controller: ElementsController.getName() },
            {url: "/elements/notification", label: "Notifications", templateUrl: "./pages/elements/notifications.html", controller: ElementsController.getName() },
            {url: "/elements/dropdowns", label: "Dropdowns", templateUrl: "./pages/elements/dropdowns.html", controller: ElementsController.getName() }
        ]},

        { label: "Forms", icon: "fa fa-pencil-square-o", childRoutes: [
            {url: "/forms/standard", label: "Standard", templateUrl: "./pages/forms/standard.html", controller: FormsController.getName() },
            {url: "/elements/wizards", label: "Wizards", templateUrl: "./pages/forms/wizards.html", controller: FormsController.getName() },
            {url: "/elements/upload", label: "Upload", templateUrl: "./pages/forms/uploads.html", controller: FormsController.getName() }
        ]},

        { label: "Pages", icon: "fa fa-file-o", childRoutes: [
            { url: "/pages/login", label: "Login", templateUrl: "./pages/pages/login.html", controller: PagesController.getName() },
            { url: "/pages/register", label: "Register", templateUrl: "./pages/pages/register.html", controller: PagesController.getName() },
            { url: "/pages/forgot-password", label: "Forgot Password", templateUrl: "./pages/pages/forgot-password.html", controller: PagesController.getName() },
            { url: "/pages/404", label: "404", templateUrl: "./pages/pages/404.html", controller: PagesController.getName() },
            { url: "/pages/500", label: "500", templateUrl: "./pages/pages/500.html", controller: PagesController.getName() },
            { url: "/pages/maintenance", label: "Maintenance", templateUrl: "./pages/pages/maintenance.html", controller: PagesController.getName() }
        ]}
    ];

    return routes;
});